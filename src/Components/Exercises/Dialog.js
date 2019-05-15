import React, { Component } from "react"
import {
  Fab,
  Dialog as MuiDialog,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core"
import { Form } from "./index"
import { Add } from "@material-ui/icons"
import { ExercisesContext } from "../../context"

class Dialog extends Component {
  static contextType = ExercisesContext

  state = {
    open: false
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleFormSubmit = exercise => {
    this.handleToggle()

    this.context.onCreate(exercise)
  }

  render() {
    const { open } = this.state
    const { muscles } = this.context

    return (
      <>
        <Fab onClick={this.handleToggle} color="secondary" size="small">
          <Add />
        </Fab>
        <MuiDialog
          open={open}
          onClose={this.handleToggle}
          fullWidth
          maxWidth="xs"
        >
          <DialogTitle>Create a New Exercise</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form bellow
            </DialogContentText>
            <Form muscles={muscles} onSubmit={this.handleFormSubmit} />
          </DialogContent>
        </MuiDialog>
      </>
    )
  }
}

export default Dialog
