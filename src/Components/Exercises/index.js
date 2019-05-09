import React, { Fragment } from "react";
import { Grid, Paper, Typography, List, ListItem, ListItemText } from "@material-ui/core";

const style = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10, hight: 500, overflowY: "auto" }
};

export default ({ exercises, category, onSelect }) => (
  <Grid container>
    <Grid item sm>
      <Paper style={style.Paper}>
        {exercises.map(([group, exercises]) =>
          !category || category === group ? (
            <Fragment>
              <Typography variant="headline" style={{ textTransform: "capitalize" }}>
                {group}
              </Typography>
              <List component="ul">
                {exercises.map(({ id, title }) => (
                  <ListItem>
                    <ListItemText primary={title} onClick={() => onSelect(id)} />
                  </ListItem>
                ))}
              </List>
            </Fragment>
          ) : null
        )}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={style.Paper}>Right pane</Paper>
      <Typography variant="display1">Welcome!</Typography>
      <Typography variant="subheading" style={{ marginTop: 20 }}>
        Please select exerscise from list on the let
      </Typography>
    </Grid>
  </Grid>
);
