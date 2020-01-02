import React from 'react';
import './Coin.css';

class Coin extends React.Component{
  render(){
    let src;
    if(this.props.side === "Head"){
      src = "https://images-na.ssl-images-amazon.com/images/I/51xs7F%2BtP5L._SX425_.jpg"
    } else {
      src = "http://cdn.shopify.com/s/files/1/0686/9287/products/coin_ring_barber_Half_Dollar_tails_6_grande.JPG?v=1510168938"
    }
    return(
      <div className="Coin">
        <img className="Coin-img" src={src} alt="Coin"/>
      </div>
    )
  }
}

export default Coin;