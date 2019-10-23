import React, {Component} from 'react';
import PokemonCardDetails from '../pokemonCardDetails/PokemonCardDetails.js'
import ItemCardDetails from '../itemCardDetails/ItemCardDetails.js'
import './card.scss'
class Card extends Component {
  render() {
    return (
      <div>

        {this.props.searchType === 'pokemon' ?
          <div>
            {this.props.data ? 
              <PokemonCardDetails data={this.props.data}></PokemonCardDetails> : <h1>No Results!</h1>
            }
          </div> : 
          
          <div>
            {this.props.data ? 
              <ItemCardDetails data={this.props.data}></ItemCardDetails> : <h1>No Results!</h1>
            }
          </div>
        }

      </div>
    )
  }
}

export default Card