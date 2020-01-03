import React from 'react';
import {imgIdCreator} from '../helper';

class Pokecard extends React.Component{
  render(){
    const styles = {
      color: 'white',
      backgroundColor: 'grey',
      borderRadius: '20%',
      padding: '20px'
    }
    const imgStyles = {
      height: '150px'
    }
    const imgDivStyles = {
      margin: '0 auto'
    }
    const imgSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imgIdCreator(this.props.id)}.png`;
    return(
      <div className="col-md-3 col-12 p-2">
        <div style={styles}>
          <h4>{this.props.name}</h4>
          <div style={imgDivStyles}><img style={imgStyles} className="img-responsive" src={imgSrc} alt={this.props.name}/></div>
          <p>Type: {this.props.type} <br/> Exp: {this.props.exp}</p>
        </div>
      </div>
    )
  }
}

export default Pokecard;