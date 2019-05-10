import React, { Component, Fragment } from "react";
import { Button, Dialog, TextField, Select } from "@material-ui/core";
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core/Dialog";
import { FormControl } from "@material-ui/core/FormControl";
import { InputLabel } from "@material-ui/core/InputLabel";
import { MenuItem } from "@material-ui/core/Menu";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  FormControl: {
    width: 500
  }
});

// import { Add } from "material-ui-icons";

export default withStyles(styles)(
  class extends Component {
    state = {
      open: false,
      exercise: {
        title: "",
        description: "",
        muscles: ""
      }
    };

    handleToggle = () => {
      this.setState({
        open: this.state.open
      });
    };

    handleChange = name => ({ target: { value } }) => {
      this.setState({
        exercise: { ...this.state.exercise, [name]: value }
      });
    };

    handleSubmit = () => {
      //TODO: validate
      const { exercise } = this.state;

      this.props.onCreate({
        ...exercise,
        id: exercise.title.toLowerCase().replace(/ /g, "-")
      });

      this.setState({
        open: false,
        exercise: {
          title: "",
          description: "",
          muscles: ""
        }
      });
    };

    render() {
      const {
          open,
          exercise: { title, description, muscles }
        } = this.state,
        { classes, muscles: categories } = this.props;

      return (
        <Fragment>
          <Button variant="fab" onClick={this.handleToggle} mini>
            {/* <Add /> */}
          </Button>
          <Dialog open={open} onClose={this.handleToggle}>
            <DialogTitle id="form-dialog-title">
              Create a new exercise
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please fill a form
              </DialogContentText>
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
                  <Select
                    value={muscles}
                    onChange={this.handleChange("muscles")}
                  >
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
              </form>
            </DialogContent>
            <DialogActions>
              <Button
                color="primary"
                variant="raised"
                onClick={this.handleSubmit}
              >
                Create
              </Button>
            </DialogActions>
          </Dialog>
        </Fragment>
      );
    }
  }
);
