import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { isFunction } from "../../../utility/Validator";
import settings from "../../../settings.json";

const SectionTimer = ({ onComplete }) => {
  const storedValueAsNumber = Number(localStorage.getItem("counter"));

  const [counter, setCounter] = React.useState(
    Number.isInteger(storedValueAsNumber) && storedValueAsNumber > 0
      ? storedValueAsNumber
      : 30
  );

  useEffect(() => {
    if (counter)
      setTimeout(() => {
        setCounter(counter - 1);
        localStorage.setItem("counter", String(counter - 1));
      }, 1000);
    else if (isFunction(onComplete)) onComplete();
  }, [counter]);

  return (
    <Typography variant="h6">
      {settings.screens.play.sections.timer.messages.TIME_LEFT}
      <Typography component="span" variant="h4">
        {` ${counter}`}
      </Typography>
    </Typography>
  );
};

SectionTimer.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default SectionTimer;
