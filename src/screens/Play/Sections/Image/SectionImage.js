import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { CardMedia, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { v4 as uuidv4 } from "uuid";
import { useSnackbar, withSnackbar } from "notistack";
import { getImages } from "../../../../store/slice/ImageSlice";
import CustomButton from "../../../../components/Buttons/CustomButton";
import { isFunction } from "../../../../utility/Validator";
import settings from "../../../../settings.json";
import { Colors } from "../../../../constants/ColorPalette";
import CircularLoading from "../../../../components/Loading/CircularLoading";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    boxShadow: "none",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "24rem",
    height: "24rem",
    [theme.breakpoints.down("md")]: {
      width: "15rem",
      height: "15rem",
    },
  },
  image: {
    width: "33.333%",
    height: "33.333%",
    "&:hover": {
      border: `4px solid ${Colors.GOLD}`,
    },
    [theme.breakpoints.down("md")]: {
      width: "5rem",
      height: "5rem",
    },
  },
}));

const SectionImage = ({ onImageClick }) => {
  const classes = useStyles();

  const [localLoading, setLocalLoading] = useState(true);

  const { currentImages, error } = useSelector((state) => state.images);
  const dispatch = useDispatch();

  const didMountRef = useRef(false);

  const { enqueueSnackbar } = useSnackbar();

  const handleImageClick = (type) => {
    setLocalLoading(true);
    if (isFunction(onImageClick)) onImageClick(type);
  };

  const createUI = () =>
    localLoading ? (
      <CircularLoading />
    ) : (
      currentImages.map((image) => (
        <CardMedia
          key={uuidv4()}
          component="img"
          className={classes.image}
          onClick={() => handleImageClick(image.type)}
          image={image.data}
        />
      ))
    );

  const dispatchGetImages = () => dispatch(getImages());

  useEffect(() => {
    if (currentImages.length < 1) dispatchGetImages();
    else setLocalLoading(false);
  }, [JSON.stringify(currentImages)]);

  useEffect(() => {
    if (didMountRef.current) {
      if (error)
        enqueueSnackbar(error, {
          variant: "error",
        });
    } else didMountRef.current = true;
  }, [error]);

  return (
    <Paper className={classes.container}>
      {error ? (
        <CustomButton onClick={dispatchGetImages}>
          {settings.screens.play.sections.image.messages.RETRY_BUTTON}
        </CustomButton>
      ) : (
        createUI()
      )}
    </Paper>
  );
};

SectionImage.propTypes = {
  onImageClick: PropTypes.func.isRequired,
};

export default withSnackbar(SectionImage);
