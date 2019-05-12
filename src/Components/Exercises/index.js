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
import { Edit, Delete } from "@material-ui/icons"
import Form from "./Form"

const style = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    hight: 500,
    overflowY: "auto"
  }
}

export default ({
  muscles,
  exercises,
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
                  <ListItem button key={id} onClick={() => onSelect(id)}>
                    <ListItemText primary={title} />
                    <ListItemSecondaryAction>
                      <IconButton onClick={() => onSelectEdit(id)}>
                        <Edit />
                      </IconButton>
                      <IconButton onClick={() => onDelete(id)}>
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
    <Grid item sm>
      <Paper style={style.Paper}>
        {editMode ? (
          <Form muscles={muscles} onSubmit={onEdit} exercise={exercise} />
        ) : (
          <Fragment>
            <Typography variant="display1">{title}</Typography>
            <Typography variant="subheading" style={{ marginTop: 20 }}>
              {description}
            </Typography>
          </Fragment>
        )}
      </Paper>
    </Grid>
  </Grid>
)
