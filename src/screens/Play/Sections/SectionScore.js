import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import settings from "../../../settings.json";

const SectionScore = ({ score }) => (
  <Typography variant="h5">
    {settings.screens.play.sections.score.messages.SCORE_TITLE}
    <Typography component="span" variant="h4">
      {` ${score}`}
    </Typography>
  </Typography>
);

SectionScore.propTypes = {
  score: PropTypes.number.isRequired,
};

export default SectionScore;
