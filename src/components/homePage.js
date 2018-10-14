import React from 'react'
import {Helmet} from 'react-helmet'
import {connect} from 'react-redux'

class HomePage extends React.Component{
    constructor(props){
    super(props);
    this.state = {

    }
  }

    exampleMethod(){
      console.log('Shit is going down')
    }

    head(){
      return (
        <Helmet>
        <title> React SSR Headline Testing App </title>
        </Helmet>
      )
    }
    render(){
      return(
        <div>
          {this.head()}
          <h1>Hello</h1>
          <button onClick={() => this.exampleMethod()}> Console log some text </button>
        </div>
      )
    }
}

export default HomePage;
