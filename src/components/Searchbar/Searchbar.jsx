import { FcSearch } from 'react-icons/fc';
import fields from './fields';
export function Searchbar({ value, onChange }) {
  return (
    <div>
      <FcSearch />
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        {...fields.value}
      />
    </div>
  );
}
