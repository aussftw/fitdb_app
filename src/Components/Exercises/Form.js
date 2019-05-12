import React, { Component } from "react"
import { TextField, Select, Button } from "@material-ui/core"
import { FormControl } from "@material-ui/core/FormControl"
import { InputLabel } from "@material-ui/core/InputLabel"
import { MenuItem } from "@material-ui/core/Menu"

import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  FormControl: {
    width: 300
  }
})

export default withStyles(styles)(
  class extends Component {
    state = this.getInitialState()

    getInitialState() {
      const { exercise } = this.props

      return exercise
        ? exercise
        : {
            title: "",
            description: "",
            muscles: ""
          }
    }

    componentWillReceiveProps({ exercise }) {
      this.setState({
        ...exercise
      })
    }

    handleChange = name => ({ target: { value } }) =>
      this.setState({
        [name]: value
      })

    handleSubmit = () => {
      //TODO: validate

      this.props.onSubmit({
        id: this.state.title.toLowerCase().replace(/ /g, "-"),
        ...this.state
      })

      this.setState(this.getInitialState())
    }

    render() {
      const { title, description, muscles } = this.state,
        { classes, muscles: categories } = this.props
      return (
        <form>
          <TextField
            label="title"
            value={title}
            onChange={this.handleChange("title")}
            margin="normal"
            className={classes.FormControl}
          />
          <br />
          <FormControl className={classes.FormControl}>
            <InputLabel htmlFor="muscles">muscles</InputLabel>
            <Select value={muscles} onChange={this.handleChange("muscles")}>
              {categories.map(category => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
          <TextField
            label="description"
            value={description}
            multiline
            rows="4"
            onChange={this.handleChange("description")}
            margin="normal"
            className={classes.FormControl}
          />
          <br />
          <Button color="primary" variant="raised" onClick={this.handleSubmit}>
            {this.props.exercise ? "Edit" : "Create"}
          </Button>
        </form>
      )
    }
  }
)
