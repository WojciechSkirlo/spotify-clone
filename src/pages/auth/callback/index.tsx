import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/context/auth';

const AuthCallbackPage = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const navigation = useNavigate();
  const [getToken, setAccessToken, setRefreshToken] = useAuthStore((state) => [
    state.getToken,
    state.setAccessToken,
    state.setRefreshToken
  ]);

  useEffect(() => {
    const check = async () => {
      if (!code) navigation('/auth/login');
      else {
        const { access_token, refresh_token, expires_in } = await getToken(code);
        access_token && setAccessToken(access_token, expires_in);
        refresh_token && setRefreshToken(refresh_token, expires_in);

        navigation('/');
      }
    };

    check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default AuthCallbackPage;
