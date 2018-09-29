import React from 'react'
import { CardItem } from '../components'
import data from '../data/books.json'
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star'
import { Link } from 'react-router-dom'

export default class Category extends React.Component {
  render () {
    const style = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      flexDirection: 'row'
    }
    const categoryBooks = data.books.filter(
      categorised => categorised.category === this.props.match.params.categoryId
    )
    return (
      <div style={style}>
        {/* render categories list */}
        <div>
          <List>
            {data.categories.map((item, index) => (
              <Link to={`/category/${item.id}`} key={index}>
                <ListItem button>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItem>
              </Link>
            ))}
          </List>
        </div>

        {/* render books list */}
        <div>
          <div className={'container'}>
            {categoryBooks.map((card, index) => (
              <CardItem data={card} index={index} key={index}/>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
