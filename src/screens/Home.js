import React from 'react'
import { CardItem } from '../components'
import _ from 'lodash' // just for mockup array rang(10)
import data from '../data/books.json'
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star'

export default class Home extends React.Component {
  state = {
    data: _.range(10) //add array [0, ..., 10]
    
  }

  categoryClick = item => () => {
    this.props.history.replace(`/category/${item.id}`)
  }
  
  render () {
    const style = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      flexDirection: 'row'
    }

    return (
      <div style={style}>
        {/* render categories list */}
        <div>
          <List>
            {data.categories.map(item => (
              <ListItem button onClick={this.categoryClick(item)} key={item.id}>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
        </div>

        {/* render books list */}
        <div>
          <div className={'container'}>
            {data.books.map((card, index) => (
              <CardItem data={card} index={index} key={index} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
