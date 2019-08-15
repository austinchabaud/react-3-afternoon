import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor() {
    super()

    this.state = {
      text: '', 
      posts: []
    }
  }

  handleChange(filter) {
    this.setState({
      text: filter
    })
  }
  render() {
    let postToDisplay = this.state.posts.filter((element, index) => {
      return element.includes(this.state.text)
    })
    .map(( element, index ) => {
      return <h2 key={index}>{element}</h2>
    });

    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input onChange={e => this.handleChange(e.target.value)} placeholder="Search Your Feed" />
          {postToDisplay}
          <SearchIcon id="Search__icon" />
        </div>
        
      </section>
    )
  }
}