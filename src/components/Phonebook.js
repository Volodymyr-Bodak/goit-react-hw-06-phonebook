import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, updateFilter } from './redux/phonebookSlice';
import { PersistGate } from 'redux-persist/integration/react'; 
import ContactForm from './ContatForm/Contactform';
import ContactList from './Contactlist';
import Filter from './Filter';
import { persistor } from './redux/store';
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
    console.log(contacts)
  };


  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts?.filter((contact) =>
  contact.name.toLowerCase().includes(filter.toLowerCase())
);

  
  return (
    <PersistGate loading={null} persistor={persistor}>
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={handleSubmit} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleChangeFilter={handleChangeFilter} />
        <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
      </div>
    </PersistGate>
  );
};

export default Phonebook;