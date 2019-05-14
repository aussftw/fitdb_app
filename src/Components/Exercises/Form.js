import React, { Component } from "react"
import { TextField, Select, Button } from "@material-ui/core"
import { FormControl } from "@material-ui/core/FormControl"
import { InputLabel } from "@material-ui/core/InputLabel"
import { MenuItem } from "@material-ui/core/Menu"

export default class extends Component {
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
  }

  render() {
    const { title, description, muscles } = this.state,
      { muscles: categories } = this.props
    return (
      <form>
        <TextField
          label="title"
          value={title}
          onChange={this.handleChange("title")}
          margin="normal"
          fullWidth
        />
        <br />
        <FormControl fullWidth>
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
          fullWidth
        />
        <br />
        <Button
          color="primary"
          variant="raised"
          onClick={this.handleSubmit}
          disabled={!title || !muscles}
        >
          {this.props.exercise ? "Edit" : "Create"}
        </Button>
      </form>
    )
  }
}
