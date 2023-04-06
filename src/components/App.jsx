import { useState, useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { nanoid } from 'nanoid';
import Form from './form/Form';
import Filter from './filter/Filter';
import ContactList from './contacts/ContactsList';

const PhoneBook = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? PhoneBook
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleUpdate = data =>
    contacts.some(el => el.name === data.name)
      ? toast.error('already in contact', {
          duration: 1500,
          position: 'top-right',
        })
      : setContacts(prevState => [
          { name: data.name, number: data.number, id: nanoid() },
          ...prevState,
        ]);

  const handleFilter = value => setFilter(value);

  const handleDelete = id =>
    setContacts(contacts.filter(contact => contact.id !== id));

  const onFilterNames = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };

  return (
    <>
      <h1>Phonebook</h1>
      <Form handleUpdate={handleUpdate} />
      <h2>Contacts</h2>
      {contacts.length > 0 && (
        <Filter filter={filter} handleFilter={handleFilter} />
      )}
      <ContactList contacts={onFilterNames()} handleDelete={handleDelete} />
      <Toaster />
    </>
  );
};

export default App;
