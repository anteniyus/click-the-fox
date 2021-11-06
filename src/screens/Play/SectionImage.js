import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { CardMedia, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { v4 as uuidv4 } from "uuid";
import { getImages } from "../../store/slice/ImageSlice";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "24rem",
    height: "24rem",
    [theme.breakpoints.down("md")]: {
      width: "15rem",
      height: "15rem",
    },
  },
  image: {
    width: "8rem",
    height: "8rem",
    [theme.breakpoints.down("md")]: {
      width: "5rem",
      height: "5rem",
    },
  },
}));

const SectionImage = ({ onImageClick }) => {
  const classes = useStyles();

  const [localLoading, setLocalLoading] = useState(true);

  const { currentImages } = useSelector((state) => state.images);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentImages.length < 1) dispatch(getImages());
    else setLocalLoading(false);
  }, [currentImages]);

  const handleImageClick = (type) => {
    setLocalLoading(true);
    onImageClick(type);
  };

  const createUI = () =>
    currentImages.map((image) => (
      <CardMedia
        key={uuidv4()}
        component="img"
        className={classes.image}
        onClick={() => handleImageClick(image.type)}
        image={image.data}
      />
    ));

  return (
    <Paper className={classes.container}>
      {localLoading ? <p>LOADING</p> : createUI()}
    </Paper>
  );
};

SectionImage.propTypes = {
  onImageClick: PropTypes.func.isRequired,
};

export default SectionImage;
