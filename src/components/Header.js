import React from "react";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter } from "react-router-dom";
import commonClasses from "./UI/classes";
import { Grid, Fab, Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useCart } from "react-use-cart";

const Header = (props) => {
  const classes = commonClasses();
  const { history } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const { totalItems } = useCart();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  const menuItems = [
    {
      menuTitle: "Home",
      pageURL: "/",
    },
    {
      menuTitle: "Products",
      pageURL: "/products",
    },
    {
      menuTitle: "About",
      pageURL: "/about",
    },
  ];

  return (
    <Grid item container className={classes.root}>
      <AppBar position="fixed" className={classes.app_bar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            My Store!
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map((menuItem, index) => {
                  const { menuTitle, pageURL } = menuItem;
                  return (
                    <MenuItem
                      key={index}
                      onClick={() => handleMenuClick(pageURL)}
                    >
                      {menuTitle}
                    </MenuItem>
                  );
                })}
              </Menu>
            </>
          ) : (
            <Grid container className={classes.headerOptions}>
              <Button variant="outlined" onClick={() => handleButtonClick("/")}>
                HOME
              </Button>
              <Button
                variant="outlined"
                onClick={() => handleButtonClick("/products")}
              >
                Products
              </Button>
              <Button
                variant="outlined"
                onClick={() => handleButtonClick("/about")}
              >
                ABOUT
              </Button>

              <Button
                variant="outlined"
                onClick={() => handleButtonClick("/login")}
              >
                LOG-IN
              </Button>

              <Grid item>
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCartIcon
                    fontSize="large"
                    variant=""
                    onClick={() => handleButtonClick("/cart")}
                  >
                    Cart
                  </ShoppingCartIcon>
                </Badge>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default withRouter(Header);
