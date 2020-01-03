import React from 'react';
import Die from '../Die';
import './RollDice.css'

class RollDice extends React.Component{
  state = {
    die1: 5,
    die2: 2, 
    rolling: false
  }
  createRandomNum = () => {
    this.setState({ rolling: true});
    const die1 = Math.ceil(Math.random() * 6);
    let die2 = Math.ceil(Math.random() * 6);
    while(die1 === die2){
      die2 = Math.ceil(Math.random() * 6);
    }
    this.setState({die1: die1, die2: die2});
    setTimeout(() => {this.setState({rolling: false})}, 1000);
    
  }
  render(){
    return(
    <div className="DiceRoller" style={{ width: '400px'}}>
      <div className="row">
        <div className="col-6">
          <Die num={this.state.die1} rolling={this.state.rolling}/>
        </div>
        <div className="col-6">
          <Die num={this.state.die2} rolling={this.state.rolling}/>
        </div>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => this.createRandomNum()}
        disabled={this.state.rolling}
        >
        {!this.state.rolling ? 'Roll the dice!' : 'Rolling...'}
      </button>
    </div>
    )
  }
}

export default RollDice;