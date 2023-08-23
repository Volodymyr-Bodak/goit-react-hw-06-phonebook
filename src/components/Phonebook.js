
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, updateFilter } from './redux/phonebookSlice';
import ContactForm from './ContatForm/Contactform';
import ContactList from './Contactlist';
import Filter from './Filter';

const Phonebook = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.phonebook.filter);
  const dispatch = useDispatch();

  const handleSubmit = newContact => {
    const contactExists = contacts.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase());

    if (contactExists) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    dispatch(addContact(newContact));
  };

  const handleChangeFilter = event => {
    dispatch(updateFilter(event.target.value));
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };


  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleChangeFilter={handleChangeFilter} />
      <ContactList  handleDelete={handleDelete} />
    </div>
  );
};

export default Phonebook;
