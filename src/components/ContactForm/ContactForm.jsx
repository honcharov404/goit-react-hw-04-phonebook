import React, { useState } from 'react';
import PropTypes from 'prop-types';

import s from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChangeName = e => {
    const name = e.target.value;

    setName(name);
  };

  const onChangeNumber = e => {
    const number = e.target.value;

    setNumber(number);
  };

  const onSubmit = e => {
    e.preventDefault();

    addContact(name, number);

    setName('');
    setNumber('');
  };

  return (
    <div className={s.contactForm}>
      <form className={s.form} onSubmit={onSubmit}>
        <p className={s.text}>Name</p>
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={onChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <p className={s.text}>Number</p>
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          onChange={onChangeNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <div>
          <button className={s.btn} type="submit">
            Add contact
          </button>
        </div>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
