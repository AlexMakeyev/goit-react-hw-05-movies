import { FcSearch } from 'react-icons/fc';
import fields from './fields';
import { SearchContainer, Input } from './Searchbar.styled';
export function Searchbar({ value, onChange }) {
  return (
    <SearchContainer>
      <FcSearch size="25" />
      <Input
        type="text"
        placeholder="Search movies"
        value={value}
        onChange={e => onChange(e.target.value)}
        {...fields.value}
      />
    </SearchContainer>
  );
}
