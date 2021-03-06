import { useNavigate } from 'react-router-dom';

import FormRegister from './Form';

function Container() {
  const navigate = useNavigate();

  return (
    <div>
      <FormRegister
        handleSave={(user) => {
          localStorage.setItem('user', JSON.stringify(user));
          navigate('/');
        }}
      />
    </div>
  );
}

export default Container;
