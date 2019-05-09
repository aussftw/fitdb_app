import React from "react";
import { Paper, Tabs } from "@material-ui/core";
import { Tab } from "@material-ui/core/Tabs";

export default ({ muscules }) => (
  <Paper>
    <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
      {/* <Tab label="ll" /> */}
      {/* {muscules.map(group => (
        <Tab label={group} />
      ))} */}
    </Tabs>
  </Paper>
);
