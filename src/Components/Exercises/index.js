import React, { Fragment } from "react"
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import { Edit, Delete } from "@material-ui/icons"
import Form from "./Form"
import { withContext } from "../../context"

const styles = theme => ({
  Paper: {
    padding: 20,
    overflowY: "auto",
    [theme.breakpoints.up("sm")]: {
      marginTop: 5,
      height: "calc(100%-10px)"
    },
    [theme.breakpoints.down("xs")]: {
      height: "100%"
    }
  },
  "@global": {
    "html, body, #root": {
      height: "100%"
    }
  },
  container: {
    [theme.breakpoints.up("sm")]: {
      height: "calc(100%-64px -48px)"
    },
    [theme.breakpoints.down("xs")]: {
      height: "calc(100% - 56px - 48px)"
    }
  },
  item: {
    [theme.breakpoints.down("xs")]: {
      height: "50%"
    }
  }
})

const Exercises = ({
  classes,
  muscles,
  exercisesByMuscles,
  category,
  onSelect,
  onEdit,
  exercise,
  editMode,
  exercise: {
    id,
    title = "Welcome",
    description = "Please select an exercise from list on the left"
  },
  onDelete,
  onSelectEdit
}) => (
  <Grid container className={classes.container}>
    <Grid item className={classes.item} xs={12} sm={6}>
      <Paper className={classes.Paper}>
        {exercisesByMuscles.map(([group, exercises]) =>
          !category || category === group ? (
            <Fragment key={group}>
              <Typography
                variant="headline"
                color="secondary"
                className={{ textTransform: "capitalize" }}
              >
                {group}
              </Typography>
              <List component="ul">
                {exercises.map(({ id, title }) => (
                  <ListItem button key={id} onClick={() => onSelect(id)}>
                    <ListItemText primary={title} />
                    <ListItemSecondaryAction>
                      <IconButton
                        color="primary"
                        onClick={() => onSelectEdit(id)}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton color="primary" onClick={() => onDelete(id)}>
                        <Delete />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </Fragment>
          ) : null
        )}
      </Paper>
    </Grid>
    <Grid item className={classes.item} s={12} sm={6}>
      <Paper className={classes.Paper}>
        <Typography variant="display1" gutterBottom color="secondary">
          {title}
        </Typography>
        {editMode ? (
          <Form
            key={id}
            muscles={muscles}
            onSubmit={onEdit}
            exercise={exercise}
          />
        ) : (
          <Typography variant="subheading">{description}</Typography>
        )}
      </Paper>
    </Grid>
  </Grid>
)

export default withContext(withStyles(styles)(Exercises))
