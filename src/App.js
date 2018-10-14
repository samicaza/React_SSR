import React from 'react'
import {Switch, Route} from 'react-router';
import {connect} from 'react-redux';
import { setMessage } from './store/appReducer';
import HomePage from './components/homepage.js'

class App extends React.Component{

  render(){
    return (
      <Switch>
        <Route exact path='/' component={HomePage}/>
      </Switch>
    )
  }
}


export default App;
