import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { isFunction } from "../../../utility/Validator";
import settings from "../../../settings.json";

const SectionTimer = ({ onComplete }) => {
  const storedCounter = Number(localStorage.getItem("counter"));

  const didMountRef = useRef(false);

  const [counter, setCounter] = React.useState(
    Number.isInteger(storedCounter) && storedCounter > 0 ? storedCounter : 30
  );

  useEffect(() => {
    didMountRef.current = true;
    return () => {
      localStorage.setItem("counter", String(0));
      didMountRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (counter)
      setTimeout(() => {
        if (didMountRef.current) setCounter(counter - 1);
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
