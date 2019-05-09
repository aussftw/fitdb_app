import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
// import Toolbar from "@material-ui/core/Toolbar";

export default props => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit">
        Exercises DB
      </Typography>
    </Toolbar>
  </AppBar>
);
