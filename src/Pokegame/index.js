import React from 'react';
import Pokedex from './Pokedex';

class Pokegame extends React.Component{  
  state = {
    pokemons: [
      {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
      {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
      {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
      {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
      {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
      {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
      {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
      {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
    ]
  }
  componentDidMount(){
    this.setState({pokemons: [
      {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
      {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
      {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
      {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
      {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
      {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
      {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
      {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
    ]})
  }
  render(){
    const hand1 = [];
    const hand2 = [];
    const pokemons = this.state.pokemons;
    while(hand1.length < 4){
      const randNum = Math.floor(Math.random() * pokemons.length);

      const pokemon = this.state.pokemons[randNum];
      hand1.push(pokemon);
      pokemons.splice(randNum, 1);
    }
    pokemons.forEach( p => {
      hand2.push(p);
    })
    let totalExp1 = 0;
    let totalExp2 = 0;
    for(let i=0; i<4; i++){
      totalExp1 += hand1[i].base_experience
    }
    for(let i=0; i<4; i++){
      totalExp2 += hand2[i].base_experience
    }
    let finalDiv;
    if(totalExp1> totalExp2){
      finalDiv = <div><Pokedex key="1" hand={1} pokemons={hand1} isWinner/><Pokedex key="2" hand={2} pokemons={hand2}/></div>;
    } else {
      finalDiv = <div><Pokedex key="1" hand={1} pokemons={hand1} /><Pokedex key="2" hand={2} pokemons={hand2} isWinner/></div>
    }

    return(
      <div className="container" style={{display: "flex", justifyContent: "center"}}>
        {finalDiv}
      </div>
    )
  }
}

export default Pokegame;