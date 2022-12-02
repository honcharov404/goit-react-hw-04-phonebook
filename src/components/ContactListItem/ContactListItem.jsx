import React from 'react';
import PropTypes from 'prop-types';

import s from './ContactListItem.module.css';

const ContactListItem = ({ name, number, id, deleteContact }) => {
  return (
    <li className={s.item}>
      <p className={s.text}>{name + ': ' + number}</p>
      <button className={s.btn} value={id} onClick={deleteContact}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
