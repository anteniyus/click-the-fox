import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import * as moment from "moment";
import { useHistory } from "react-router-dom";
import CustomButton from "../../components/Buttons/CustomButton";
import WelcomeInfo from "./Info";
import { addUser } from "../../store/slice/UserSlice";

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

  const history = useHistory();
  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

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

  const loadList = () => history.push("/users");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!submitted) createUser();
    else loadList();
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
