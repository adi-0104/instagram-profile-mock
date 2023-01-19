import { Grid, Modal } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Photo.css";
const Photo = React.forwardRef(({ photo }, ref) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 800,
    bgcolor: "#333",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const content = ref ? (
    <img
      className="photos-img"
      ref={ref}
      src={photo.thumbnailUrl}
      alt=""
      onClick={handleOpen}
    />
  ) : (
    <img
      className="photos-img"
      ref={ref}
      src={photo.thumbnailUrl}
      alt=""
      onClick={handleOpen}
    />
  );

  return (
    <>
      <Grid
        item
        xs={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 0.5,
        }}
      >
        {content}
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img className="photos-img" ref={ref} src={photo.url} alt="" />
        </Box>
      </Modal>
    </>
  );
});

export default Photo;
