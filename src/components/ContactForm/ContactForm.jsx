import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { Form } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';

export const ContactForm = ({ onAddContact }) => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  const name = useSelector(state => state.contactForm.name);
  const numer = useSelector(state => state.contactForm.numer);
  const useDispatch = useDispatch();

  const onHandleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        dispach({ type: 'SET_NAME' });
        break;
      case 'number':
        dispach({ type: 'SET_NUMBER' });
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const id = nanoid(5);
    onAddContact({ id, name, number });

    setName('');
    setNumber('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            onChange={onHandleChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          Number
          <input
            onChange={onHandleChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />{' '}
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
