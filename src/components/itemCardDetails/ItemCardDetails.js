import React, {Component} from 'react'

class ItemCardDetails extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.data.name}</h1>
        <img src={this.props.data.sprites.default} alt=""/>
      </div>
    )
  }
}

export default ItemCardDetails;