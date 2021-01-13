import React from "react";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Logo from "./../images/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logoImg: {
    width: 50,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">
              <img src={Logo} alt="Logo" className={classes.logoImg} />
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
