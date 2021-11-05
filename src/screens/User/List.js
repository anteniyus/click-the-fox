import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Card } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router-dom";
import CustomStickyHeaderTable from "../../components/Tables/CustomStickyHeaderTable";
import orderBy from "../../utility/SortUtility";
import CustomButton from "../../components/Buttons/CustomButton";

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

const UserList = () => {
  const classes = useStyles();

  const { users } = useSelector((state) => state.users);
  const history = useHistory();

  const redirectToWelcomeScreen = () => history.push("/");
  const redirectToPlayScreen = () => history.push("/play");

  return (
    <StyledCard>
      <CustomStickyHeaderTable
        columns={columns}
        data={[...users].sort(orderBy("score"))}
        hasRowCounter
        rowCounterTitle="Rank"
      />

      <div className={classes.root}>
        <CustomButton variant="contained" onClick={redirectToWelcomeScreen}>
          To Welcome Screen
        </CustomButton>
        <CustomButton variant="contained" onClick={redirectToPlayScreen}>
          PLAY!
        </CustomButton>
      </div>
    </StyledCard>
  );
};

export default UserList;
