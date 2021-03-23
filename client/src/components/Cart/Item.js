import React from "react";
import {
  Divider,
  Grid,
  Paper,
  Typography,
  makeStyles,
  Card,
  CardHeader
} from "@material-ui/core";
import download from "../../Resources/img1.jpeg";

import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
const useStyles = makeStyles((theme) => ({
  root: {
    "& img": {
      margin: "auto",
      display: "block",
      width: "100%",
      height: "auto",
      maxWidth: "300px"
    }
  }
}));

const Item = ({
  title,
  content,
  views,
  validity,
  price,
  instructor,
  duration,
  onClick,
  id
}) => {
  const classes = useStyles();

  const handleOnClick = (e) => {
    onClick(id);
    console.log(id);
  };
  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12} sm={5} style={{ paddingLeft: "10px" }}>
        <div>
          <img src={download} />
        </div>
      </Grid>
      <Grid item xs={12} container sm={7} style={{ paddingLeft: "40px" }}>
        <Grid item xs={8}>
          <Typography gutterBottom variant="h6" color="primary">
            {title}
          </Typography>
          <Typography gutterBottom variant="subtitle2">
            <ul>
              <li>{`Content Type: ${content} ${id}`}</li>
              <li>{`Duration: ${duration} Hours`}</li>
              <li>{`${views} Views`}</li>
              <li>{`Validity ${validity}`}</li>
            </ul>
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography gutterBottom variant="subtitle2">
            {`Rs.${price}`}
          </Typography>

          <Divider />

          <Typography gutterbottom variant="subtitle2">
            By {instructor}
          </Typography>

          <div
            style={{
              paddingTop: "54px",
              textAlign: "right",
              paddingRight: "10px"
            }}
          >
            <Fab color="primary" aria-label="add" onClick={handleOnClick}>
              <DeleteIcon />
            </Fab>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Item;
