import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Button from './Button';
import Pokegame from './Pokegame';
import NumberApp from './NumberApp';
import RollDice from './Dice/RollDice';
import Lottery from './LotteryGame/Lottery';
import CoinFlipper from './CoinFlipper/CoinFlipper';
import Layout from './Layout';
import buttonImg from "./routeImages/button.PNG";
import coinflipperImg from "./routeImages/coinflipper.PNG";
import lotteryImg from "./routeImages/lottery.PNG";
import numberAppImg from "./routeImages/number-app.PNG";
import rollDiceImg from "./routeImages/rolldice.PNG";
import pokegameImg from "./routeImages/pokegame.PNG";
import HomePage from './HomePage/HomePage';

function App() {
  const routes = [
    {path:'/pokegame',       img: pokegameImg,    component:Pokegame,    name:"Pokegame"},
    {path:'/button',         img: buttonImg,      component:Button,      name:"Button"},
    {path:'/number-app',     img: numberAppImg,   component:NumberApp,   name:"Number"},
    {path:'/rolldice',       img: rollDiceImg,    component:RollDice,    name:"Roll Dice"},
    {path:'/lottery',        img: lotteryImg,     component:Lottery,     name:"Lottery"},
    {path:'/coinflipper',    img: coinflipperImg, component:CoinFlipper, name:"Coin Flipper"},
  ];
  const routesRender = routes.map(r => <Route exact path={r.path} component={r.component}/>);
  return (
    <div className="App">
      <Layout routes={routes}>
        <Switch>
          {routesRender}
          <Route render={() => <HomePage routes={routes} /> }/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
