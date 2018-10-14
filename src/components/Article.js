import React from 'react';

export default class Article extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <img src={this.props.imgSrc} height='100' width='100'>
          <a src={this.props.articleSrc}></a>
        </img>
      </div>
    )
  }
}
