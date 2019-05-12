import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CreateDialog from "../Exercises/Dialog";

export default ({ muscles, onExersciseCreate }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography
        variant="headline"
        color="inherit"
        style={{ flex: 1 }}
      >
        Exercises DB
      </Typography>
      <CreateDialog muscles={muscles} onCreate={onExersciseCreate} />
    </Toolbar>
  </AppBar>
);
