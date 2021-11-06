import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const SectionScore = ({ score }) => (
  <Typography variant="h5">
    Score
    <Typography component="span" variant="h4">
      {` ${score}`}
    </Typography>
  </Typography>
);

SectionScore.propTypes = {
  score: PropTypes.number.isRequired,
};

export default SectionScore;
