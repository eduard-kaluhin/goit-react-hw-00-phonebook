import { FilterLabel, FilterInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/phonebookSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          type="text"
          onChange={e => dispatch(setFilter(e.target.value))}
        />
      </FilterLabel>
    </>
  );
};
export default Filter;
