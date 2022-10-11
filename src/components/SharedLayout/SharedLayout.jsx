import { Outlet } from 'react-router-dom';
import { Navbar } from 'components/Navbar/Navbar';

export const SharedLayout = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};
