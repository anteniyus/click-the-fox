import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import styled from "styled-components";
import settings from "../../settings.json";

const StyledTypography = styled(Typography)`
  cursor: pointer;
`;

const WelcomeInfo = ({ name, changeName }) => (
  <Typography variant="h5">
    {settings.screens.welcome.sections.info.messages.USER_WELCOME}
    <StyledTypography component="span" variant="h4" onClick={changeName}>
      {` ${name}`}
    </StyledTypography>
  </Typography>
);

WelcomeInfo.propTypes = {
  name: PropTypes.string.isRequired,
  changeName: PropTypes.func.isRequired,
};

export default WelcomeInfo;
