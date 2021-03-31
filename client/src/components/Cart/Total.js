import React from "react";
import {
  Card,
  makeStyles,
  CardContent,
  Typography,
  CardActions,
  Checkbox,
  FormControlLabel,
  Link,
  Grid
} from "@material-ui/core";
import Button from "../UI Elements/Button";

const CartStyles = makeStyles({
  TotalCard: {
    background: "white",
    textAlign: "left",
    "& .MuiBox-root": {
      width: "100%",
      "& .MuiCheckbox-colorSecondary.Mui-checked": {
        color: "#f26522"
      }
    }
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    color: "#f26522",
    fontWeight: "600",
    lineHeight: "16px"
  },
  pos: {
    marginBottom: 12
  },
  totalButton: {
    background: "#f26522",
    color: "white",
    margin: "auto",
    width: "100%",
    padding: "10px 20px"
  }
});

const Total = (props) => {
  const items = props.items;
  const title = `(Rs.${props.price})`;
  const classes = CartStyles();
  return (
    <Grid container direction="column">
      <Card className={classes.TotalCard}>
        <CardContent>
          <Grid item container direction="column" xs={12} spacing={2}>
            <Grid item xs={12}>
              <Typography className={classes.title} component="h5">
                Your order is eligible for free order
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="textSecondary" component="h5">
                Select this option at checkout &nbsp;
                <Link color="textPrimary">Details</Link>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography component="h4">
                {`Subtotal (${items} items) : ${title}`}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox />}
                label="This order contains a gift"
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            size="large"
            text="Proceed to buy"
            type="submit"
            className={classes.totalButton}
          />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Total;
