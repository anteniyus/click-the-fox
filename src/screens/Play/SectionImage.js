import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { CardMedia, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { v4 as uuidv4 } from "uuid";
import { clearImages, getImages } from "../../store/slice/ImageSlice";
import randomize from "../../utility/ArrayUtility";

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

  const [imagesLoaded, setImagesLoaded] = useState(false);

  const { images } = useSelector((state) => state.images);
  const dispatch = useDispatch();

  const loadImage = (imageURL) =>
    new Promise((resolve, reject) => {
      const loadImg = new Image();
      loadImg.src = imageURL;
      loadImg.onload = () => resolve(imageURL);
      loadImg.onerror = (err) => reject(err);
    });

  useEffect(() => {
    dispatch(getImages());

    return function cleanup() {
      dispatch(clearImages());
    };
  }, []);

  useEffect(() => {
    if (images.length) {
      const allPromises = images.map((image) => loadImage(image.data));

      Promise.all(allPromises)
        .then(() => setImagesLoaded(true))
        .catch((err) => console.log("Failed to load images", err));
    }
  }, [images]);

  const handleImageClick = (type) => {
    setImagesLoaded(false);
    onImageClick(type);
  };

  const createUI = () =>
    randomize(images).map((image) => (
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
      {imagesLoaded ? createUI() : <p>LOADING</p>}
    </Paper>
  );
};

SectionImage.propTypes = {
  onImageClick: PropTypes.func.isRequired,
};

export default SectionImage;
