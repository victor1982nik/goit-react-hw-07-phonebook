import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { Input, Label } from './Filter.styled';

export function Filter() {
  const filter = useSelector(state => state.filter.filterStr);
  const dispatch = useDispatch();

  return (
    <>
      <Label>Find contacts by name</Label>
      <Input
        type="filter"
        name="filter"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </>
  );
}
