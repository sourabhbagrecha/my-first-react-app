import React from 'react';
import Ball from '../Ball/index';
import './index.css';

class Lottery extends React.Component{
  static defaultProps = {
    numBalls: 6,
    maxNum: 40
  }
  state = {
    BallsArray : Array.from({length: this.props.numBalls})
  }
  generateRandomNumber = (curState) => {
    return {BallsArray: curState.BallsArray.map(n => Math.ceil(Math.random()*this.props.maxNum))}
  }
  generateLottery = () => {
    this.setState(curState => this.generateRandomNumber(curState))
  }
  render(){
    return(
      <div className="Lottery">
        <h1 className="mb-5">Lottery</h1>
        {this.state.BallsArray.map(B => <Ball num={B}/>)}
        <div className="mt-5">
          <button 
            className="btn btn-lg btn-primary"
            onClick={() => this.generateLottery()}>Generate</button>
        </div>
      </div>
    )
  }
}

export default Lottery;