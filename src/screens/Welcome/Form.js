import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { useSnackbar, withSnackbar } from "notistack";
import CustomButton from "../../components/Buttons/CustomButton";
import WelcomeInfo from "./Info";
import { addUser, updateCurrentUser } from "../../store/slice/UserSlice";
import { getImages } from "../../store/slice/ImageSlice";
import { setTitle } from "../../store/slice/TitleSlice";
import settings from "../../settings.json";
import { internalPaths } from "../../rest/URLs";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1rem 3rem",
    [theme.breakpoints.down("md")]: {
      padding: "1rem 2rem",
    },
  },
}));

const WelcomeForm = () => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { images } = useSelector((state) => state.images);
  const { users } = useSelector((state) => state.users);

  const history = useHistory();
  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const checkUserExistence = () =>
    users.find((element) => element.name === name);

  const dispatchCreateUser = () => {
    setSubmitted(true);
    dispatch(
      addUser({
        name,
        score: 0,
        date: moment().format("YYYY, MMM DD"),
      })
    );
  };

  const createUser = () => {
    if (checkUserExistence())
      enqueueSnackbar(settings.errors.messages.USER_EXISTENCE, {
        variant: "error",
      });
    else dispatchCreateUser();
  };

  const redirectToPlay = () => {
    dispatch(updateCurrentUser(name));
    history.push(internalPaths.PLAY);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!submitted) createUser();
    else redirectToPlay();
  };

  const renderContent = () =>
    submitted ? (
      <WelcomeInfo name={name} changeName={() => setSubmitted(!submitted)} />
    ) : (
      <TextField
        label="Name"
        inputProps={{ "data-testid": "name" }}
        variant="outlined"
        value={name}
        onChange={handleNameChange}
      />
    );

  useEffect(() => {
    if (images.length < settings.configs.IMAGE_PRELOAD_LIMITATION)
      for (let i = 0; i < settings.configs.IMAGE_PRELOAD_LIMITATION; i++)
        dispatch(getImages());
  }, []);

  useEffect(() => {
    dispatch(
      setTitle(settings.screens.welcome.sections.form.messages.PAGE_TITLE)
    );
  }, []);

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "space-between",
        width: "20rem",
        maxWidth: "20rem",
        height: "30rem",
        flexWrap: "nowrap",
        "& > *": {
          margin: "1rem",
        },
      }}
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      {renderContent()}

      <CustomButton
        variant={submitted ? "contained" : "outlined"}
        type="submit"
        disabled={!name}
      >
        {settings.screens.welcome.sections.form.messages.PLAY_BUTTON}
      </CustomButton>
    </Box>
  );
};

export default withSnackbar(WelcomeForm);
