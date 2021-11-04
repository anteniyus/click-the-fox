import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { Colors } from "../../constants/ColorPalette";

const StyledButton = styled(Button)`
  box-shadow: none;
  border: 2px solid ${Colors.GOLD};
  color: ${(props) => (props.variant === "outlined" ? "black" : "white")};
`;

const CustomButton = ({ children, variant, type, disabled }) => (
  <StyledButton variant={variant} type={type} disabled={disabled}>
    {children}
  </StyledButton>
);

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
