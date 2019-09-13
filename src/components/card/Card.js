import React, {Component} from 'react';
import PokemonCardDetails from '../pokemonCardDetails/PokemonCardDetails.js'
import './card.scss'
class Card extends Component {
  render() {
    return (
      <div>
        {this.props.data ? 
          <PokemonCardDetails data={this.props.data}></PokemonCardDetails> : <h1>No Results!</h1>}
      </div>
    )
  }
}

export default Card