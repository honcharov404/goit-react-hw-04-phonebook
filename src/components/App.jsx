import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';

import s from './App.module.css';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const checkLocalStorage = localStorage.getItem('contacts');

    if (checkLocalStorage) {
      const contacts = JSON.parse(checkLocalStorage);
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevState) {
    const newContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (newContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(newContacts));
    }
  }

  addContact = (name, number) => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState(prevState => {
      const newContacts = prevState.contacts
        .slice(0)
        .concat({ id: nanoid(), name, number });
      return { contacts: newContacts };
    });
  };

  setFilter = e => {
    const filter = e.target.value;

    this.setState({ filter });
  };

  filterContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  };

  deleteContact = e => {
    const deletedContactId = e.target.value;

    this.setState(prevState => {
      const contacts = prevState.contacts;
      const newArr = contacts.filter(
        contact => contact.id !== deletedContactId
      );

      return {
        contacts: newArr,
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.filterContacts(contacts, filter);

    return (
      <div className={s.App}>
        <h1 className={s.mainTitle}>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2 className={s.title}>Contacts</h2>
        <Filter filter={filter} setFilter={this.setFilter} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
