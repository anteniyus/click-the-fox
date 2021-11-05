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

  const [imgsLoaded, setImgsLoaded] = useState(false);

  const { images } = useSelector((state) => state.images);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImages());
  }, []);

  useEffect(() => {
    const loadImage = (imageURL) =>
      new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = imageURL;
        loadImg.onload = () => resolve(imageURL);
        loadImg.onerror = (err) => reject(err);
      });

    Promise.all(images.map((image) => loadImage(image.data)))
      .then(() => setImgsLoaded(true))
      .catch((err) => console.log("Failed to load images", err));
  }, [images]);

  const handleImageClick = (type) => {
    onImageClick(type);
  };

  const createUI = () => (
    <Paper className={classes.container}>
      {images.map((image) => (
        <CardMedia
          key={uuidv4()}
          component="img"
          className={classes.image}
          onClick={() => handleImageClick(image.type)}
          image={image.data}
        />
      ))}
    </Paper>
  );

  return imgsLoaded ? createUI() : <p>LOADING</p>;
};

SectionImage.propTypes = {
  onImageClick: PropTypes.func.isRequired,
};

export default SectionImage;
