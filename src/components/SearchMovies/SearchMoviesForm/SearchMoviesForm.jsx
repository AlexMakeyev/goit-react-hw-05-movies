import { useState } from 'react';
// import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import initialState from './intialState';
import fields from './fields';
import { FcSearch } from 'react-icons/fc';

export const SearchMoviesForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = event => {
    const { name, value } = event.target;
    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  const validateForm = data => {
    const isValid = !!data.state;
    return isValid;
  };
  const handleSubmit = async event => {
    event.preventDefault();
    const isValid = validateForm({ ...state });
    if (!isValid) {
      toast.error('Enter Text');
      return;
    }
    await onSubmit({ ...state });
    setState({ ...initialState });
  };
  const { search } = state;

  return (
    <form onSubmit={handleSubmit}>
      <input value={search} onChange={handleChange} {...fields.search} />
      <button type="submit">
        <FcSearch />
      </button>
    </form>
  );
};
