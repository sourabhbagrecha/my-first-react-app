import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Button from './Button';
import NumberApp from './NumberApp';
import RollDice from './Dice/RollDice';
import Lottery from './LotteryGame/Lottery';
import CoinFlipper from './CoinFlipper/CoinFlipper';
import Layout from './Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path='/button' component={Button} />
          <Route exact path='/number-app' component={NumberApp} />
          <Route exact path='/rolldice' component={RollDice} />
          <Route exact path='/lottery' component={Lottery} />
          <Route exact path='/coinflipper' component={CoinFlipper} />
          <Route render={() => <h1>Oops! You should'nt have come here!</h1>}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
