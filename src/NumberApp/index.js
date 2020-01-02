import React from 'react';
import './index.css';

class NumberApp extends React.Component{
  state = {
    number: 0
  }
  handleRandomClick = () => {
    this.setState({number: Math.floor(Math.random() * 10)});
  }
  render(){
    return(
      <div className="NumberApp">
        <h1>{this.state.number}</h1>
        {(this.state.number === 7) ? <h1>You Won</h1> : <button onClick={() => this.handleRandomClick()} >Random Number</button>}
      </div>
    )
  }
}

export default NumberApp;