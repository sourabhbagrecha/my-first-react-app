import React from 'react';
import './index.css';

class Button extends React.Component{
  constructor(props){
    super(props);
    this.state = {clicked: false};
  }
  flipState = (curState) => {
    return {clicked: !curState.clicked}
  }
  buttonClicked(e){
    this.setState(this.flipState);
  }
  render(){
    
    return(
    <div className="Button">
      <h1>{this.state.clicked ? 'Clicked!!!': 'Not Clicked!'}</h1>
      <button onClick={() => this.buttonClicked()}>Click Me!</button>
    </div>
    )
  }
}

export default Button;