import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './Form.module.css';

const Form = ({ handleUpdate }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = nanoid();
  const numberId = nanoid();

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;

    if (name === 'name') {
      setName(value);
    } else {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      name,
      number,
    };
    handleUpdate(newContact);
    handleReset();
  };

  const handleReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={css.formContainer}>
      <form onSubmit={handleSubmit}>
        <label htmlFor={nameId} className={css.formLabel}>
          Name
        </label>
        <input
          id={nameId}
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoComplete="off"
        />
        <label className={css.formLabel} htmlFor={numberId}>
          Number
        </label>
        <input
          id={numberId}
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          autoComplete="off"
        />
        <button className={css.formbBtn} type="submit">
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default Form;
