import React from 'react';
import ContactListItem from './ContactListItem';

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} handleDelete={handleDelete} />
      ))}
    </ul>
  );
};

export default ContactList;

