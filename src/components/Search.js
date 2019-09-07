import React, {Component} from 'react';

class Search extends Component{
  constructor(props) {
    super(props)
    this.state = {term: ''}
    this.submitSearch = this.submitSearch.bind(this)
    this.callBackendApi = this.callBackendApi.bind(this);
  }

  callBackendApi = async (val) => {
    const response = await fetch('/' + val);
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

  render() {
    return (
      <div>
        <input onChange={this.updateSearchTerm()} type='text'/>
        <button onClick={this.submitSearch}>Search</button>
      </div>
    )
  }
}

export default Search;