import React from "react";
import { Card, Typography } from "@mui/material";
import styled from "styled-components";
import ScreensRoot from "../Root";
import { Colors } from "../../constants/ColorPalette";

const StyledCard = styled(Card)`
  box-shadow: none;
  border: 2px solid ${Colors.BLUE_EGYPTIAN};
  max-width: 80%;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const StyledTypography = styled(Typography)`
  padding-top: 2rem;
`;

const MainScreen = () => (
  <StyledCard>
    <StyledTypography component="p" variant="h5">
      Click the Fox! Game
    </StyledTypography>

    <StyledDiv>
      <ScreensRoot />
    </StyledDiv>
  </StyledCard>
);

export default MainScreen;
