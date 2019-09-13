import React, {Component} from 'react'

class PokemonCardDetails extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.data.name}</h1>
        <img src={this.props.data.sprites.front_default} alt=""/>
      </div>
    )
  }
}

export default PokemonCardDetails;