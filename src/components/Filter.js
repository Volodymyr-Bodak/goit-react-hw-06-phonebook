import React from 'react';
import { useDispatch } from 'react-redux';
import { updateFilter } from './redux/phonebookSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Filter Contacts"
      onChange={handleChange}
    />
  );
};

export default Filter;
