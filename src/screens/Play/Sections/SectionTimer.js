import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { isFunction } from "../../../utility/Validator";

const SectionTimer = ({ onComplete }) => {
  const [counter, setCounter] = React.useState(200);

  useEffect(() => {
    if (counter) setTimeout(() => setCounter(counter - 1), 1000);
    else if (isFunction(onComplete)) onComplete();
  }, [counter]);

  return (
    <Typography variant="h6">
      Time Left:
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
