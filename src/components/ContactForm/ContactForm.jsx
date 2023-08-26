import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Form } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { getContacts } from 'redux/selectors';

const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const useDispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;

    if (contacts.some(contact => contact.name === name)) {
      Notify.failure('${name} is already in contacts');
      return;
    }
    dispatch(addContact(name, number));

    form.reset();
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

export default ContactForm;
