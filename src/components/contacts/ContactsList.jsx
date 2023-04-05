import css from './ContactList.module.css';

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <>
      <ul className={css.contactList}>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id} className={css.contactItem}>
              {name}: {number}
              <button
                className={css.contactBtn}
                type="button"
                onClick={() => {
                  handleDelete(id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
