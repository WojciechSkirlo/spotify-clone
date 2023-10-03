import { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import Cookies from 'js-cookie';
import router from '@/router';
import { api } from '@/api';
import AuthService from '@/services/auth';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const setToken = (token: string) => {
    Cookies.set('token', token);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await AuthService.getToken();
        setToken(token.access_token);
        setIsLoading(false);
      } catch {
        console.error('error');
        setIsLoading(false);
      }
    };

    getToken();
  }, []);

  if (isLoading) return <>Loading...</>;

  return <RouterProvider router={router} />;
};

export default App;
