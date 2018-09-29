import React from 'react'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import data from '../data/books.json'
const uuidv4 = require('uuid/v4')

class NewCategory extends React.Component {
  state = {
    value: ''
  }

  onClick = value => () => {
    if (value === 'cancel') {
      this.setState({ value: '' })
    } else {
      data.categories.push({
        id: uuidv4(),
        name: this.state.value
      })
      // simultate to save data into books.json
      // fs.writeFile('../data/books.json', data, function (err) {
      //   if (err) throw err
      //   console.log('complete')
      // })
      this.setState({ value: '' })
    }
  }

  render () {
    const { classes } = this.props
    return (
      <div className={'container'}>
        <h5 className={'teal-text'}>About Us</h5>
        <TextField
          id='outlined-full-width'
          label='Name'
          style={{ margin: 10 }}
          placeholder='Name'
          fullWidth
          margin='normal'
          variant='standard'
          InputProps={{
            disableUnderline: true
          }}
          onChange={event => this.setState({ value: event.target.value })}
          value={this.state.value}
        />
        <div>
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            onClick={this.onClick()}
          >
            <SaveIcon className={classes.leftIcon} />
            Save
          </Button>
          <Button
            variant='contained'
            size='small'
            className={classes.button}
            onClick={this.onClick('cancel')}
          >
            cancel
          </Button>
        </div>
      </div>
    )
  }
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
    fontSize: 20
  }
})

export default withStyles(styles)(NewCategory)
