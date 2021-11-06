import React from "react";
import { Card, Typography } from "@mui/material";
import styled from "styled-components";
import { useSelector } from "react-redux";
import ScreensRoot from "../Root";
import { Colors } from "../../constants/ColorPalette";

const StyledTitleTypography = styled(Typography)`
  color: black;
  text-align: left;
  padding-left: 10rem;
  width: 100%;
  padding-bottom: 1rem;
  @media (max-width: 900px) {
    text-align: center;
    padding-left: 0;
  }
`;

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

const MainScreen = () => {
  const { title } = useSelector((state) => state.title);

  return (
    <>
      <StyledTitleTypography variant="h3">{title}</StyledTitleTypography>
      <StyledCard>
        <StyledTypography component="p" variant="h5">
          Click the Fox! Game
        </StyledTypography>

        <StyledDiv>
          <ScreensRoot />
        </StyledDiv>
      </StyledCard>
    </>
  );
};

export default MainScreen;
