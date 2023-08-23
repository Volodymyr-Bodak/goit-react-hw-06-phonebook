import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from './redux/phonebookSlice';
import ContactListItem from './ContactListItem';

const ContactList = () => {
  const contacts = useSelector(state => state.phonebook.contacts);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} handleDelete={handleDelete} />
      ))}
    </ul>
  );
};

export default ContactList;

