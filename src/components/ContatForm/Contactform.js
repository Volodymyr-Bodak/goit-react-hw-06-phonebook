import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'components/redux/phonebookSlice';
import styles from './ContactForm.module.css';
import PropTypes from "prop-types";
const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const onSubmit = event => {
    event.preventDefault();
    const newContact = { id: Date.now().toString(), name, number };
    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };


  return (
    <form className={styles.formContainer} onSubmit={onSubmit}>
      <label>
        Name:
        <input
          className={styles.formInput}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        Number:
        <input
          className={styles.formInput}
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
        />
      </label>
      <button className={styles.formButton} type="submit">
        Add Contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
