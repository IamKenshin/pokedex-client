import React, {Component} from 'react';
import './search.scss'

class Search extends Component{
  constructor(props) {
    super(props)
    this.state = {term: ''}
    this.submitSearch = this.submitSearch.bind(this)
    this.callBackendApi = this.callBackendApi.bind(this);
  }

  callBackendApi = async (val) => {
    const response = await fetch('/' + this.props.type + '/' + val);
    const body = await response.json();

    if(response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  }

  updateSearchTerm = param => e => {
    this.setState({term: e.target.value.toLowerCase()})
  }

  submitSearch() {
    this.callBackendApi(this.state.term)
      .then(res => this.props.callback(res.response))
  }

  onEnterPress = (evt) => {
    this.submitSearch();
  }

  render() {
    return (
      <div className='search'>
        <input onChange={this.updateSearchTerm()} onKeyPress={(e) => { if(e.key === 'Enter') this.onEnterPress(e)}} type='text'/>
        <div className='search-btn' onClick={this.submitSearch}>
          <img src='images/search-icon.png' alt='search'/>
        </div>
      </div>
    )
  }
}

export default Search;