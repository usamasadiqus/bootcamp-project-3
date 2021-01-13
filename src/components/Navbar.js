import React from "react";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Logo from "./../images/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logoImg: {
    width: 50,
  },
  navLinks: {
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  linkItem: {
    padding: "5px",
    margin: "0 10px",
    color: "#fff",
    textDecoration: "none",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            <NavLink to="/">
              <img src={Logo} alt="Logo" className={classes.logoImg} />
            </NavLink>
          </Typography>
          <Typography variant="h6" className={classes.navLinks}>
            <NavLink to="/" className={classes.linkItem}>
              Home
            </NavLink>
            <NavLink to="/about" className={classes.linkItem}>
              About
            </NavLink>
            <NavLink to="/menshoes" className={classes.linkItem}>
              Men Shoes
            </NavLink>
            <NavLink to="/womenshoes" className={classes.linkItem}>
              Women Shoes
            </NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
