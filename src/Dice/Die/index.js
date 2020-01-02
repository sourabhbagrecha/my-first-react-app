import React from 'react';
import {numberConverter} from '../../helper';
import './index.css';

class Die extends React.Component{
  render(){
    const word = numberConverter(this.props.num);
    return(
      <div className={this.props.rolling ? 'shaking': null}>
        <i style={{ fontSize: '9rem'}} className={`fas fa-dice-${word}`}></i>
      </div>
    )
  }
}

export default Die;