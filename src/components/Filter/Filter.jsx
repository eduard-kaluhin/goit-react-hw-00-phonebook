import { Input, Label } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Label>
        Find contacts by name{' '}
        <Input
          type="text"
          name="filter"
          onChange={e => dispatch(setFilter(e.target.value))}
        />
      </Label>
    </>
  );
};
export default Filter;
