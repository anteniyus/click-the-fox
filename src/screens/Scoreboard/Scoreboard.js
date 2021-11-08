import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Card } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router-dom";
import CustomStickyHeaderTable from "../../components/Tables/CustomStickyHeaderTable";
import { orderByDescending } from "../../utility/SortUtility";
import CustomButton from "../../components/Buttons/CustomButton";
import { setTitle } from "../../store/slice/TitleSlice";
import settings from "../../settings.json";
import { internalPaths } from "../../rest/URLs";

const columns = [
  { title: "Name", key: "name" },
  { title: "Date", key: "date" },
  { title: "Score", key: "score" },
];

const StyledCard = styled(Card)`
  box-shadow: none !important;
  padding: 0 2rem;
  max-width: 40rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-around;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));

const Scoreboard = () => {
  const classes = useStyles();

  const { users } = useSelector((state) => state.users);
  const history = useHistory();

  const dispatch = useDispatch();

  const redirectToWelcomeScreen = () => history.push(internalPaths.WELCOME);
  const redirectToPlayScreen = () => history.push(internalPaths.PLAY);

  useEffect(() => {
    dispatch(setTitle("Scoreboard"));
  }, []);

  return (
    <StyledCard>
      <CustomStickyHeaderTable
        columns={columns}
        data={[...users].sort(orderByDescending("score"))}
        hasRowCounter
        rowCounterTitle="Rank"
      />

      <div className={classes.root}>
        <CustomButton variant="contained" onClick={redirectToWelcomeScreen}>
          {settings.screens.scoreboard.sections.self.messages.WELCOME_BUTTON}
        </CustomButton>

        <CustomButton variant="contained" onClick={redirectToPlayScreen}>
          {settings.screens.scoreboard.sections.self.messages.PLAY_BUTTON}
        </CustomButton>
      </div>
    </StyledCard>
  );
};

export default Scoreboard;
