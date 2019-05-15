import React from "react"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import { Dialog } from "../Exercises/index"
import { withStyles } from "@material-ui/core/styles"

const styles = {
  flex: {
    flex: 1
  }
}

const Header = ({ classes }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h5" color="inherit" className={classes.flex}>
        Exercises DB
      </Typography>
      <Dialog />
    </Toolbar>
  </AppBar>
)

export default withStyles(styles)(Header)
