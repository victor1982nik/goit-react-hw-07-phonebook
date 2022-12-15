import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from 'redux/contacts/actions';
import { getFilter } from 'redux/contacts/selectors';
import { Input, Label } from './Filter.styled';

export function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <Label>Find contacts by name</Label>
      <Input
        type="filter"
        name="filter"
        value={filter}
        onChange={e => dispatch(filterChange(e.target.value))}
      />
    </>
  );
}
