import React from "react"
import { Typography } from "@material-ui/core"
import { Form } from "./index"
import { withContext } from "../../context"

const Preview = ({
  onEdit,
  muscles,
  exercise,
  editMode,
  exercise: { id, title, description }
}) => (
  <>
    <Typography variant="h4" gutterBottom color="secondary">
      {title || "Welcome!"}
    </Typography>
    {editMode ? (
      <Form key={id} muscles={muscles} onSubmit={onEdit} exercise={exercise} />
    ) : (
      <Typography variant="subtitle1">
        {description || "Please select an exercise from list on the left"}
      </Typography>
    )}
  </>
)

export default withContext(Preview)
