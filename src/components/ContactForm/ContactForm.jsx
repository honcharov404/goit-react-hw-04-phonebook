import PropTypes from 'prop-types';
import React, { Component } from 'react';

import s from './ContactForm.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static defaultProps = {
    addContact: () => {},
  };

  static propTypes = {
    addContact: PropTypes.func,
  };

  onChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;

    this.props.addContact(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <div className={s.contactForm}>
        <form className={s.form} onSubmit={this.onSubmit}>
          <p className={s.text}>Name</p>
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={this.onChange}
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
            onChange={this.onChange}
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
  }
}
