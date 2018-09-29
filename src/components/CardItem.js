import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import {
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Divider
} from '@material-ui/core'

const CardItem = props => {
  const { classes, data } = props

  return (
    <div>
      <CardActionArea
        className={classes.card}
        onClick={() => alert(`You Pressed ${props.index + 1}'s item`)}
      >
        <CardMedia className={classes.cover} image={data.image} />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant='headline'>{data.title}</Typography>
            <Typography variant='subheading' color='textSecondary'>
              {data.description}
            </Typography>
          </CardContent>
        </div>
      </CardActionArea>
      <Divider className={classes.root} inset />
    </div>
  )
}

const styles = theme => ({
  card: {
    display: 'flex',
    minWidth: 1000,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop: 20
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto',
    alignItems: 'flex-start'
  },
  cover: {
    flex: '1 0 auto',
    alignItems: 'center',
    width: 300,
    alignSelf: 'stretch',
    // height: 250
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  playIcon: {
    height: 38,
    width: 38
  },
  root: {
    marginTop: '20px'
  }
})

CardItem.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(CardItem)
