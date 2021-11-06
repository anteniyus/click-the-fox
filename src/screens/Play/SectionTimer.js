import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const SectionTimer = ({ onComplete }) => {
  const [counter, setCounter] = React.useState(30);

  useEffect(() => {
    if (counter) setTimeout(() => setCounter(counter - 1), 1000);
    else {
      onComplete();
    }
  }, [counter]);

  return (
    <Typography variant="h6">
      Time Left:
      <Typography component="span" variant="h4">
        {" "}
        {counter}
      </Typography>
    </Typography>
  );
};

SectionTimer.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default SectionTimer;
