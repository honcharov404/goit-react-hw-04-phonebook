import React from 'react';
import PropTypes from 'prop-types';

import s from './Filter.module.css';

const Filter = ({ filter = '', setFilter }) => {
  return (
    <div className={s.wrap}>
      <p className={s.text}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={setFilter}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
