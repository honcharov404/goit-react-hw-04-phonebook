import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';

import s from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }

    setContacts(prevContacts => {
      return prevContacts.slice(0).concat({ id: nanoid(), name, number });
    });
  };

  const installFilter = e => {
    const filter = e.target.value;

    setFilter(filter);
  };

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  };

  const deleteContact = e => {
    const deletedContactId = e.target.value;

    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== deletedContactId)
    );
  };

  return (
    <div className={s.App}>
      <h1 className={s.mainTitle}>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2 className={s.title}>Contacts</h2>
      <Filter filter={filter} setFilter={installFilter} />
      <ContactList contacts={filterContacts()} deleteContact={deleteContact} />
    </div>
  );
};
