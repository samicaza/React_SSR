import React from 'react'
import {connect} from 'react-redux'

class HomePage extends React.Component{

    exampleMethod(){
      console.log('Shit is going down')
    }

    render(){
      return(
        <div>
          <h1>{this.props.state.attributes.name}</h1>
          <button onClick={() => this.exampleMethod()}> Console log some text </button>
        </div>
      )
    }
}

const mapStateToProps = (state) => ({state:state.optimizelyReducer});

const mapDispatchToProps = (dispatch) => ({
  dataFileManager: (timing, id, attributes) => dispatch({type:'USER_SERVICE', id:id, attributes:attributes},
                               dispatch({type:'DATAFILE_MANAGER', timing:timing})),
  updateAttr: (attr) => dispatch({type:'UPDATE_ATTR', attr:attr, value:value})
});

HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);



export default HomePage;
