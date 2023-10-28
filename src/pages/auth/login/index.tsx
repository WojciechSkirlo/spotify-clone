import { useAuthStore } from '@/context/auth';

const AuthLoginPage = () => {
  const redirectToAuth = useAuthStore((state) => state.redirectToAuth);

  return (
    <button type="button" className="px-5 py-2 text-black rounded-full bg-malachite" onClick={redirectToAuth}>
      Zaloguj się do spotify
    </button>
  );
};

export default AuthLoginPage;
