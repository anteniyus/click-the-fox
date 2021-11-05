import React, { useEffect } from "react";
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

  const { images, isLoading } = useSelector((state) => state.images);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImages());

    return function cleanup() {
      dispatch(clearImages());
    };
  }, []);

  const handleImageClick = (type) => {
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
      {isLoading ? <p>LOADING</p> : createUI()}
    </Paper>
  );
};

SectionImage.propTypes = {
  onImageClick: PropTypes.func.isRequired,
};

export default SectionImage;
