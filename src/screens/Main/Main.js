import React from "react";
import { Card, Typography } from "@mui/material";
import styled from "styled-components";
import ScreensRoot from "../Root";
import { Colors } from "../../constants/ColorPalette";

const StyledCard = styled(Card)`
  box-shadow: none;
  border: 2px solid ${Colors.BLUE_EGYPTIAN};
`;

const StyledTypography = styled(Typography)`
  padding-top: 2rem;
`;

const MainScreen = () => (
  <StyledCard>
    <StyledTypography component="p" variant="h5">
      Click the Fox! Game
    </StyledTypography>
    <ScreensRoot />
  </StyledCard>
);

export default MainScreen;
