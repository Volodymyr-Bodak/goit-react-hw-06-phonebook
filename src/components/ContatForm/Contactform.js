import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/phonebookSlice';
import styles from 'components/ContatForm/ContactForm.module.css' 
const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.phonebook.contacts);

  const handleSubmit = (e) => {
    e.preventDefault();
      if (!name || !phone) {
    alert("Name and phone fields cannot be empty");
    return;
    }
    const existingContact = contacts.find(contact => contact.name === name);
  
    if (existingContact) {
      alert(`${name} is already in contacts`);
      return;
    }
  
    const newContact = {
      id: Date.now().toString(), 
      name,
      phone,
    };
  
    dispatch(addContact(newContact));
    setName('');
    setPhone('');
  };
  

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.formInput}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className={styles.formInput}
      />
      <button type="submit" className={styles.formButton}>Add Contact</button>
    </form>
  );
};

export default ContactForm;
