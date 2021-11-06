import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import * as moment from "moment";
import { useHistory } from "react-router-dom";
import CustomButton from "../../components/Buttons/CustomButton";
import WelcomeInfo from "./Info";
import { addUser, updateCurrentUser } from "../../store/slice/UserSlice";
import { getImages } from "../../store/slice/ImageSlice";

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

  const history = useHistory();
  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
    if (images.length < 10) for (let i = 0; i < 10; i++) dispatch(getImages());
  }, []);

  const createUser = () => {
    setSubmitted(true);
    dispatch(
      addUser({
        name,
        score: 0,
        date: moment().format("YYYY, MMM DD"),
      })
    );
  };

  const redirectToPlay = () => {
    dispatch(updateCurrentUser(name));
    history.push("/play");
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
        variant="outlined"
        value={name}
        onChange={handleNameChange}
      />
    );

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "space-between",
        width: "20rem",
        maxWidth: "25rem",
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
        PLAY!
      </CustomButton>
    </Box>
  );
};

export default WelcomeForm;
