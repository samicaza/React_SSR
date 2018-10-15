import React from 'react'
import {connect} from 'react-redux'
import Article from './Article.js'

class HomePage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      articles:[{name:'Donald Trump does something', img:'https://ichef.bbci.co.uk/news/660/cpsprodpb/9CD2/production/_103864104_95fb2d44-b556-4f53-86f7-0fa82c30c811.jpg'},
                {name:'Donald Trump does something', img:'https://ichef.bbci.co.uk/news/660/cpsprodpb/9CD2/production/_103864104_95fb2d44-b556-4f53-86f7-0fa82c30c811.jpg'},
                {name:'Donald Trump does something', img:'https://ichef.bbci.co.uk/news/660/cpsprodpb/9CD2/production/_103864104_95fb2d44-b556-4f53-86f7-0fa82c30c811.jpg'},
                {name:'Donald Trump does something', img:'https://ichef.bbci.co.uk/news/660/cpsprodpb/9CD2/production/_103864104_95fb2d44-b556-4f53-86f7-0fa82c30c811.jpg'},
                {name:'Donald Trump does something', img:'https://ichef.bbci.co.uk/news/660/cpsprodpb/9CD2/production/_103864104_95fb2d44-b556-4f53-86f7-0fa82c30c811.jpg'}]
    }
  }
    componentDidMount(){
      this.props.dataFileManager('sync')
    }

    render(){
      var articles
      if(this.props.state.actions){
        let article_title = this.props.state.actions.getFeatureVariable('article', 'title', 'string')
        console.log(article_title)
        articles = this.state.articles.map((article) => <Article name={article_title} img={article.img}/>)
      }
      return(
        <div>
          <h1>Welcome to the News App</h1>
          {articles}
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
