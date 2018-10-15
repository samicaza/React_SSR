import React from 'react'
import {Switch, Route} from 'react-router';
import {connect} from 'react-redux';
import { setMessage } from './store/appReducer';
import HomePage from './components/homepage.js'
import Article from './components/Article.js'

class App extends React.Component{

  render(){
    return (
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/article' component={Article}/>
      </Switch>
    )
  }
}

export default App;
