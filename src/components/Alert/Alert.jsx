import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export function Alert() {
  toast.error('Something went wrong...');

  return (
    <div>
      <ToastContainer />
    </div>
  );
}
