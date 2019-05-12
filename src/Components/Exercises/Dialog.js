import React, { Component, Fragment } from "react"
import { Button, Dialog } from "@material-ui/core"
import {
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core/Dialog"

import Form from "./Form"
import { Add } from "@material-ui/icons"

export default class extends Component {
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

    this.props.onCreate(exercise)
  }

  render() {
    const { open } = this.state,
      { muscles } = this.props

    return (
      <Fragment>
        <Button variant="fab" onClick={this.handleToggle} mini>
          <Add />
        </Button>
        <Dialog open={open} onClose={this.handleToggle}>
          <DialogTitle>Create a new exercise</DialogTitle>
          <DialogContent>
            <DialogContentText>Please fill a form</DialogContentText>
            <Form muscles={muscles} onSubmit={this.handleFormSubmit} />
          </DialogContent>
        </Dialog>
      </Fragment>
    )
  }
}
