import React, { Fragment } from "react";
import { Grid, Paper, Typography, List } from "@material-ui/core";
import { ListItem, ListItemText } from "@material-ui/core/List";

const style = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
};

export default ({ exercises }) => (
  <Grid container>
    <Grid item sm>
      <Paper style={style.Paper}>
        {exercises.map(([group, exercises]) => (
          <Fragment>
            <Typography variant="headline" style={{ textTransform: "capitalize" }}>
              {group}
            </Typography>
          </Fragment>
        ))}
        <Fragment>
          <List component="ul">
            {exercises.map(({ title }) => (
              <ListItem>
                <ListItemText primary={title} />
              </ListItem>
            ))}
          </List>
        </Fragment>
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={style.Paper}>Right pane</Paper>
    </Grid>
  </Grid>
);
