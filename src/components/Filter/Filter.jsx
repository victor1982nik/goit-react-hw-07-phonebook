import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { Input, Label } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';
import { Box } from 'components/Box/Box';

export function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <Box display="flex"  pb={4}>
      <Label>Find contacts by name</Label>
      <Input
        type="filter"
        name="filter"
        placeholder='type to filter contact list'
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </Box>
  );
}
