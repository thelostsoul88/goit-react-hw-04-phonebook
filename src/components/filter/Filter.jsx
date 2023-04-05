import { nanoid } from 'nanoid';
import css from './Filter.module.css';

const filterId = nanoid();
const Filter = ({ filter, handleFilter }) => {
  return (
    <div className={css.filterContainer}>
      <label htmlFor={filterId} className={css.filterLabel}>
        Find contacts by name
      </label>
      <input
        id={filterId}
        onChange={handleFilter}
        name="filter"
        type="text"
        value={filter}
        className={css.filterInput}
        autoComplete="off"
      />
    </div>
  );
};

export default Filter;
