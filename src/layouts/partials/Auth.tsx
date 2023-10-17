import { useState, useEffect, useCallback, ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import AuthService, { generateCodeChallenge, generateCodeVerifier } from '@/services/auth';
import { api } from '@/api';

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

type AuthProps = {
  children: ReactNode;
};

const Auth = ({ children }: AuthProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  const redirectToAuth = async () => {
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier);

    Cookies.set('verifier', verifier);

    const params = new URLSearchParams();
    params.append('client_id', CLIENT_ID);
    params.append('response_type', 'code');
    params.append('redirect_uri', REDIRECT_URI);
    params.append('scope', 'user-read-private user-read-email');
    params.append('code_challenge_method', 'S256');
    params.append('code_challenge', challenge);

    document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
  };

  const getToken = useCallback(async () => {
    const verifier = Cookies.get('verifier') ?? '';
    const params = new URLSearchParams();

    params.append('client_id', CLIENT_ID ?? '');
    params.append('grant_type', 'authorization_code');
    params.append('code', code ?? '');
    params.append('redirect_uri', REDIRECT_URI ?? '');
    params.append('code_verifier', verifier);

    const { access_token, refresh_token } = await AuthService.getToken(params);

    return { access_token, refresh_token };
  }, [code]);

  const refreshToken = useCallback(async () => {
    const token = Cookies.get('token') ?? '';
    const params = new URLSearchParams();

    params.append('client_id', CLIENT_ID ?? '');
    params.append('grant_type', 'refresh_token');
    params.append('refresh_token', token);

    const { access_token, refresh_token } = await AuthService.getToken(params);

    return { access_token, refresh_token };
  }, []);

  const setToken = useCallback((token: string) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }, []);

  const setRefreshToken = useCallback((token: string) => {
    Cookies.set('token', token);
  }, []);

  useEffect(() => {
    const token = Cookies.get('token') ?? '';

    const check = async () => {
      if (!code && !token) redirectToAuth();
      else {
        const { access_token, refresh_token } = token ? await refreshToken() : await getToken();
        access_token && setToken(access_token);
        refresh_token && setRefreshToken(refresh_token);

        const user = await AuthService.getProfile();

        console.log('user', user);
      }
      setIsLoading(false);
    };

    check();
  }, [code, getToken, setToken, setRefreshToken, refreshToken]);

  if (isLoading) return <>Loading...</>;

  return <>{children}</>;
};

export default Auth;
