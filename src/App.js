import React, {Component} from 'react';
import './App.css';
import Card from './components/Card.js'
import Search from './components/Search.js'

class App extends Component {
  state = {
    data: null
  };

  updateData = (data) => {
    this.setState({data: data})
  }

  render() {
    return (
      <div className="App">
        <Search callback={this.updateData}></Search> 
        {this.state.data !== null &&
        <Card data={this.state.data ? this.state.data : null}></Card>
        }
               
      </div>
    )
  }
}

export default App;
