import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { withTheme } from '@material-ui/core/styles'

const Header = props => {
  const { classes, theme } = props
  return (
    <div className={classes.root} >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <NavLink exact to={'/'} className={classes.grow} >
            <Typography variant='headline' style={{color: theme.colors.white}}>
              Book Listing
            </Typography>
          </NavLink>
          <NavLink exact to={'/newCategory'}>
            <Button
              variant='contained'
              color='secondary'
              className={classes.button}
            >
              New Category
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: 100,
  },
  appBar: {
    position: 'fixed',
    top: 0,
    overflow: 'hidden',
    maxHeight: 57
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  button: {
    margin: 10
  }
}

export default withTheme()(withStyles(styles)(Header))
