import React from 'react';

export default class Article extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className='articleContainer'>
        <div className='articleTitle'>{this.props.name}</div>
        <div className='articleImg'>
          <img className='imgTag' src={this.props.img}/>
        </div>
      </div>
    )
  }
}
