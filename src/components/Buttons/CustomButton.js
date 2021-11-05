import React from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { Colors } from "../../constants/ColorPalette";

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: "none",
    border: `2px solid ${Colors.GOLD}`,
    color: (props) => (props.variant === "outlined" ? "black" : "white"),
    marginBottom: ".7rem",
  },
}));

const CustomButton = ({ children, variant, type, disabled }) => {
  const classes = useStyles({ variant });

  return (
    <Button
      className={classes.root}
      variant={variant}
      type={type}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

CustomButton.defaultProps = {
  variant: "contained",
  type: "submit",
  disabled: false,
};

CustomButton.propTypes = {
  variant: PropTypes.oneOf(["contained", "outlined"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default CustomButton;
