import { useState, useEffect, useCallback, ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import AuthService, { generateCodeChallenge, generateCodeVerifier } from '@/services/auth';
import { api } from '@/api';
import { useUserStore } from '@/context/user';

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

type AuthProps = {
  children: ReactNode;
};

const Auth = ({ children }: AuthProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const isCollapsed = useUserStore((state) => state.isCollapsed);
  const code = searchParams.get('code');
  const refreshToken = Cookies.get('refresh_token') || '';

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

  const getToken = async (refreshToken: string) => {
    const params = new URLSearchParams();

    if (refreshToken) {
      params.append('client_id', CLIENT_ID ?? '');
      params.append('grant_type', 'refresh_token');
      params.append('refresh_token', refreshToken);
      params.append('redirect_uri', REDIRECT_URI ?? '');
    } else {
      const verifier = Cookies.get('verifier') ?? '';

      params.append('client_id', CLIENT_ID ?? '');
      params.append('grant_type', 'authorization_code');
      params.append('code', code ?? '');
      params.append('redirect_uri', REDIRECT_URI ?? '');
      params.append('code_verifier', verifier);
    }

    return await AuthService.getToken(params);
  };

  const setToken = (token: string) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

  const setRefreshToken = (token: string) => {
    Cookies.set('refresh_token', token);
  };

  const check = async () => {
    if (!code && !refreshToken) redirectToAuth();
    else {
      const { access_token, refresh_token } = await getToken(refreshToken);
      access_token && setToken(access_token);
      refresh_token && setRefreshToken(refresh_token);

      const user = await AuthService.getProfile();
      console.log(user);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <>Loading...</>;

  return <>{children}</>;
};

export default Auth;
