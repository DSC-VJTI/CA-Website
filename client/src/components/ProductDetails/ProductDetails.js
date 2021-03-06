import React, { useEffect, useState } from "react";
import {
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select
} from "@material-ui/core";
import Details from "./Details";
import download from "../../Resources/img1.jpeg";
import ProductImages from "./ProductImages";
import axios from "axios";
import { BASE_URL } from "../../constants";
import Loading from "../UI Elements/Loading";

const ProductDetailsStyles = makeStyles((theme) => ({
  root: {
    "& div.MuiGrid-root.MuiGrid-spacing-xs-3": {
      paddingTop: "10vh",
      "@media (max-width: 1000px)": {
        paddingTop: "1vh"
      }
    },
    "& img": {
      marginLeft: "auto",
      marginRight: "auto",
      display: "block",
      width: "100%",
      height: "auto",
      maxWidth: "500px"
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  selectors: {
    marginTop: "10vh",
    "@media (max-width: 1000px)": {
      marginTop: "1vh"
    }
  }
}));
const ProductDetails = ({ match }) => {
  const classes = ProductDetailsStyles();
  const [product, setProduct] = useState([]);

  const [CourseType, setCourseType] = useState("FULL COURSE");
  const [Language, setLanguage] = useState("ENGLISH");
  const [Validity, setValidity] = useState("7");
  const [Mode, setMode] = useState("PEN DRIVE");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, [Language, Mode, CourseType, Validity]);

  const getProducts = async () => {
    const innerProduct = await axios.post(`${BASE_URL}/product/filter`, {
      subject: match.params.name,
      mode: Mode,
      language: Language,
      type: CourseType,
      validity: Validity
    });
    setProduct(innerProduct.data.course);
    setIsLoading(false);
  };
  const handleCourseTypeChange = (event) => {
    setCourseType(event.target.value);
  };
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };
  const handleValidityChange = (event) => {
    setValidity(event.target.value);
  };
  const handleModeChange = (event) => {
    setMode(event.target.value);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <div className={classes.root} style={{ margin: "2rem" }}>
      <Grid container spacing={3}>
        <Grid container item md={6} xs={12}>
          <Grid container item xs={12}>
            <img
              src={product.imageUrl ? product.imageUrl : download}
              className={classes.root}
            />
          </Grid>
          <Grid container item xs={12} className={classes.selectors}>
            <Grid item xs={6} sm={3}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Mode</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Mode}
                  onChange={handleModeChange}
                >
                  <MenuItem value={"PEN DRIVE"}>Pendrive</MenuItem>
                  <MenuItem value={"GOOGLE DRIVE"}>Google Drive</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={3}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">
                  CourseType
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={CourseType}
                  onChange={handleCourseTypeChange}
                >
                  <MenuItem value={"FULL COURSE"}>Full Course</MenuItem>
                  <MenuItem value={"FAST TRACK COURSE"}>
                    Fast Track Course
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={3}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Language</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Language}
                  onChange={handleLanguageChange}
                >
                  <MenuItem value={"ENGLISH"}>ENGLISH </MenuItem>
                  <MenuItem value={"HINDI "}>HINDI</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={3}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Validity</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Validity}
                  onChange={handleValidityChange}
                >
                  <MenuItem value={"7"}>7 Months</MenuItem>
                  <MenuItem value={"12"}>12 Months</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6} lg={5} xs={12}>
          {"course" in product && <Details product={product} />}
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetails;
