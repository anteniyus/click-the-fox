import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Card } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SectionImage from "./Sections/Image/SectionImage";
import SectionScore from "./Sections/SectionScore";
import SectionTimer from "./Sections/SectionTimer";
import { updateScore } from "../../store/slice/UserSlice";
import { getCurrentImages, getImages } from "../../store/slice/ImageSlice";
import { setTitle } from "../../store/slice/TitleSlice";
import settings from "../../settings.json";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: ".5rem 2rem",
    boxShadow: "none",
  },
  info: {
    boxShadow: "none",
    paddingBottom: "1rem",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "baseline",
  },
}));

const Play = () => {
  const classes = useStyles();

  const storedScore = Number(localStorage.getItem("currentScore"));

  const { currentUser } = useSelector((state) => state.users);
  const { images } = useSelector((state) => state.images);

  const [score, setScore] = useState(
    Number.isInteger(storedScore) ? storedScore : 0
  );

  const history = useHistory();
  const dispatch = useDispatch();

  const calculatePoint = (type) => {
    if (type === "fox") {
      setScore(score + 1);
      localStorage.setItem("currentScore", String(score - 1));
    } else {
      setScore(score - 1);
      localStorage.setItem("currentScore", String(score - 1));
    }
  };

  const handleImageClick = (type) => {
    if (images.length < settings.configs.IMAGE_PRELOAD_LIMITATION)
      dispatch(getImages());
    dispatch(getCurrentImages());
    calculatePoint(type);
  };

  const handleTimerCompleted = () => {
    dispatch(updateScore({ name: currentUser, score }));
    history.push("/scoreboard");
  };

  useEffect(() => {
    dispatch(setTitle(settings.screens.play.sections.self.messages.PAGE_TITLE));
  }, []);

  useEffect(
    () => () => {
      localStorage.setItem("currentScore", String(0));
    },
    []
  );

  return (
    <Card className={classes.root}>
      <Card className={classes.info}>
        <SectionScore score={score} />

        <SectionTimer onComplete={handleTimerCompleted} />
      </Card>

      <SectionImage onImageClick={handleImageClick} />
    </Card>
  );
};

export default Play;
