import { Grid, Typography, TextField, Button } from "@material-ui/core";
import React, { useEffect } from "react";
import commonClasses from "./UI/classes";
import ProductsScroll from "./ProductsScroll";
import ImageSlider from "./carousel/ImageSlider";
import SliderData from "../components/carousel/SliderData";
import { setFilteredData, setSearchWords } from "../redux/products";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme";
import ProductsDisplay from "./ProductsDisplay";
import Footer from "./Footer";
import SearchResults from "./SearchResults";
import FadeWrap from "./UI/animations/FadeWrap";
import BounceAnim from "./UI/animations/BounceAnim.js.js";
import ZoomAnim from "./UI/animations/ZoomAnim";
import JackInTheBoxAnim from "./UI/animations/JackInTheBoxAnim";

const Home = (props) => {
  const classes = commonClasses();
  const dispatch = useDispatch();
  const searchedWords = useSelector((state) => state.products.searchedWords);
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    console.log(searchedWords);
    if (searchedWords.length) {
      const filteredData = products.filter((item) => {
        let matchingWordsCounter = 0;
        if (searchedWords.length === 1) {
          return item.tags.some(
            (tag) => tag.toLowerCase() === searchedWords[0].toLowerCase()
          );
        } else {
          searchedWords.forEach((word) => {
            if (item.tags.includes(word)) matchingWordsCounter++;
          });

          return matchingWordsCounter / item.tags.length > 0.5;
        }
      });
      dispatch(setFilteredData(filteredData));
      console.log(filteredData);
    }
  }, [searchedWords, dispatch, products]);

  const onSubmitted = (e) => {
    const enteredValue = e.target.value;
    const words = enteredValue.split(" ");
    dispatch(setSearchWords(words));
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        item
        container
        justifyContent="center"
        alignContent="center"
        spacing={10}
      >
        <Grid container item justifyContent="center" alignItems="center">
          <Grid item>
            <JackInTheBoxAnim>
              <TextField
                className={classes.main_search}
                id="main search"
                label="Serch An item:"
                autoFocus
                onClick={(e) => onSubmitted(e)}

                // onKeyDown={(e) => {
                //   // if (e.keyCode === 13) onSubmit(e);
                // }}
              ></TextField>
            </JackInTheBoxAnim>
            <Grid item>
              <SearchResults buttonName="Show Search Results" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item container justifyContent="center" alignItems="center">
          <Grid item>
            <Typography variant="h3"> HOT Items </Typography>
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <ZoomAnim>
            <ProductsScroll />
          </ZoomAnim>
        </Grid>

        <Grid item xs={6}>
          <ZoomAnim>
            <ProductsScroll />
          </ZoomAnim>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <BounceAnim>
            <ImageSlider slides={SliderData} />
          </BounceAnim>
        </Grid>
        <Grid item container justifyContent="center" alignItems="center">
          <Grid item>
            <Typography variant="h3"> Products You May Like </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <JackInTheBoxAnim>
            <ProductsScroll />
          </JackInTheBoxAnim>
        </Grid>

        <Grid item xs={12} sm={12} lg={12}>
          <FadeWrap>
            <ProductsDisplay />
          </FadeWrap>
        </Grid>

        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default Home;
