import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faSpin } from '@fortawesome/free-solid-svg-icons';

import { InfoWrapper } from '../styled-components';

const Info = ({ state, theme, vacancies, found }) => {
  let value;
  if (typeof found === 'number' && found === 0) {
    value = '404';
  } else if(vacancies.length === 0) {
    value = 'Your future job is near';
  }

  if(state === 'loading') {
    value = <FontAwesomeIcon className='fa-spin' icon={faSpinner} />;
  } else if(state === 'err') {
    value = 'Err.';
  }

  return <InfoWrapper theme={theme}>{value}</InfoWrapper>
}

const mapStateToProps = ({ theme, search, vacancies }) => {
  return {
    found: search.found,
    vacancies: vacancies.list,
    state: vacancies.status,
    theme: theme.type
  }
}

export default connect(mapStateToProps)(Info);