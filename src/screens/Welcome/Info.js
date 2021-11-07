import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import settings from "../../settings.json";

const WelcomeInfo = ({ name, changeName }) => (
  <Typography variant="h5">
    {settings.screens.welcome.sections.info.messages.USER_WELCOME}
    <Typography component="span" variant="h4" onClick={changeName}>
      {` ${name}`}
    </Typography>
  </Typography>
);

WelcomeInfo.propTypes = {
  name: PropTypes.string.isRequired,
  changeName: PropTypes.func.isRequired,
};

export default WelcomeInfo;
