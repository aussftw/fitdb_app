import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

const style = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    hight: 500,
    overflowY: "auto"
  }
};

export default ({
  exercises,
  category,
  onSelect,
  exercise: {
    id,
    title = "Welcome",
    description = "Please select an exercise from list on the left"
  }
}) => (
  <Grid container>
    <Grid item sm>
      <Paper style={style.Paper}>
        {exercises.map(([group, exercises]) =>
          !category || category === group ? (
            <Fragment key={group}>
              <Typography
                variant="headline"
                style={{ textTransform: "capitalize" }}
              >
                {group}
              </Typography>
              <List component="ul">
                {exercises.map(({ id, title }) => (
                  <ListItem
                    button
                    key={id}
                    onClick={() => onSelect(id)}
                  >
                    <ListItemText primary={title} />
                  </ListItem>
                ))}
              </List>
            </Fragment>
          ) : null
        )}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={style.Paper}>
        <Typography variant="display1">{title}</Typography>
        <Typography variant="subheading" style={{ marginTop: 20 }}>
          {description}
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
