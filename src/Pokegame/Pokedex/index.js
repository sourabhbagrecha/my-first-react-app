import React from 'react';
import Pokecard from '../Pokecard';

class Pokedex extends React.Component{
  render(){
    let totalExp = 0;
    for(let i=0; i<4; i++){
      totalExp += this.props.pokemons[i].base_experience
    }
    return(
      <div className="pokedex">
        <div className="row">{this.props.pokemons.map(p => <Pokecard id={p.id} key={p.id} name={p.name} type={p.type} exp={p.base_experience} />)}</div>
        <div> Total experience = {totalExp}</div>
        {this.props.isWinner ? "This PokeDex Won" : null}
      </div>
    )
  }
}

export default Pokedex