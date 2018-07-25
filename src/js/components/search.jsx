'use strict'

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchVacancies } from '../actions/vacanciesActions';
import { Input, SearchWrapper, Find } from '../styled-components';

@connect(null, mapDispatchToProps)
export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      text: ''
    }
    this.input = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.fetchVacancies = this.fetchVacancies.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  fetchVacancies() {
    let query = this.state.text;
    if (!query) return;

    this.props.fetchVacancies(query);
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.fetchVacancies();
      this.input.current.blur();
    }
  }

  render() {
    return (
      <SearchWrapper>
        <Input type='text' innerRef={this.input} onKeyPress={this.handleKeyPress} onChange={this.handleChange} />
        <Find type='submit' value='Find' onClick={this.fetchVacancies} />
      </SearchWrapper>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchVacancies: (query) => {
      dispatch(fetchVacancies(query));
    }
  }
}