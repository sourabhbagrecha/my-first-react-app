import React from 'react';
import './index.css'
class Ball extends React.Component{
  render(){
    return(
      <span className="Ball">
        {this.props.num}
      </span>
    )
  }
}

export default Ball;