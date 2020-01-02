import React from 'react';
import Coin from '../Coin';
import './CoinFlipper.css';

class CoinFlipper extends React.Component{
  state = {
    side: null,
    heads: 0,
    tails: 0
  }
  flipIt = () => {
    const sideNum = Math.ceil(Math.random()*2)
    if(sideNum === 1){
      this.setState({heads: this.state.heads + 1})
    } else {
      this.setState({tails: this.state.tails + 1})
    }
    this.setState({ side: (sideNum === 1) ? 'Head' : 'Tail'});
  }
  render(){
    return(
      <div className="CoinFlipper">
        <Coin side={this.state.side}/>
        <button className="btn-primary" onClick={() => this.flipIt()}> Flip It</button>
        <div>
          You got Heads for {this.state.heads} times out of {this.state.tails+this.state.heads}
        </div>
      </div>
    )
  }
}

export default CoinFlipper;