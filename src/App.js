import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'

import Home from './screens/Home'
import Category from './screens/Category'
import NewCategory from './screens/NewCategory'
import { Header } from './components'
import editeTheme from './EditTheme'
class App extends Component {
  render () {
    return (
      <MuiThemeProvider theme={editeTheme}>
          {/* add header  */}
        <Header />
        <div>
          {/* route to different components */}
          <Route exact path='/' component={Home} />
          <Route exact path='/newCategory' component={NewCategory} />
          <Route path='/category/:categoryId' component={Category} />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default withRouter(App)
