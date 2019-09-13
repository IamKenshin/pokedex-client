import React, {Component} from 'react';
import './App.scss';
import Card from './components/card/Card.js'
import Search from './components/search/Search.js'

class App extends Component {
  state = {
    data: null
  };

  updateData = (data) => {
    this.setState({data: data})
  }

  render() {
    return (
      <div className="app">
        <Search callback={this.updateData}></Search>

        <div className="cardSection">
          {this.state.data !== null &&
            <Card data={this.state.data ? this.state.data : null}></Card>
          }  
        </div> 
               
      </div>
    )
  }
}

export default App;
