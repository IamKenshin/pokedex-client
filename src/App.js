import React, {Component} from 'react';
import './App.scss';
import Card from './components/card/Card.js'
import Search from './components/search/Search.js'

class App extends Component {
  state = {
    data: null,
    searchType: 'pokemon'
  };

  updateData = (data) => {
    this.setState({data: data})
  }

  updateSearchType = (type) => {
    if(type !== this.state.searchType ) {
      this.setState({data: null, searchType: type})
    }
  }

  render() {
    return (
      <div className="app">
        <Search type={this.state.searchType} callback={this.updateData}></Search>

        <div className="searchTypeSection">
          <button onClick={() => this.updateSearchType('pokemon')}>Pokemon</button>        
          <button onClick={() => this.updateSearchType('item')}>Items</button>
        </div>
        <div className="cardSection">
          {this.state.data !== null &&
            <Card data={this.state.data ? this.state.data : null} searchType={this.state.searchType}></Card>
          }  
        </div> 
               
      </div>
    )
  }
}

export default App;
