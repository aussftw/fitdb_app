import React, { Fragment } from "react"
import { compose } from "recompose"
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core"

import { Edit, Delete } from "@material-ui/icons"
import { withStyles } from "@material-ui/core/styles"
import { withContext } from "../../context"

const styles = {
  title: { textTransform: "capitalize" }
}

const Catalog = ({
  classes,
  exercisesByMuscles,
  category,
  onSelect,
  onDelete,
  onSelectEdit
}) =>
  exercisesByMuscles.map(
    ([group, exercises]) =>
      (!category || category === group) && (
        <Fragment key={group}>
          <Typography variant="h5" color="secondary" className={classes.title}>
            {group}
          </Typography>
          <List component="ul">
            {exercises.map(({ id, title }) => (
              <ListItem button key={id} onClick={() => onSelect(id)}>
                <ListItemText primary={title} />
                <ListItemSecondaryAction>
                  <IconButton color="primary" onClick={() => onSelectEdit(id)}>
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
      )
  )

export default compose(
  withContext,
  withStyles(styles)
)(Catalog)
