import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import CustomButton from "../../components/Buttons/CustomButton";
import WelcomeInfo from "./Info";

const WelcomeForm = () => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);
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
        width: "25rem",
        height: "30rem",
        padding: "2rem 5rem",
        flexWrap: "nowrap",
        "& > *": {
          margin: "1rem",
        },
      }}
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