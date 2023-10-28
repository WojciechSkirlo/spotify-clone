import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const AuthLayout = () => {
  const refreshToken = Cookies.get('refreshToken');
  const navigation = useNavigate();

  useEffect(() => {
    if (refreshToken) navigation('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="flex items-center justify-center h-screen">
      <Outlet />
    </main>
  );
};

export default AuthLayout;
