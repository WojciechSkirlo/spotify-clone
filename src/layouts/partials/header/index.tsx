import { useNavigate } from 'react-router-dom';
import { useUserStore } from '@/context/user';
import Cookies from 'js-cookie';
import Button from '~~/Button';
import Dropdown from '~~/Dropdown';
import Icon from '~~/Icon';

const Header = () => {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);

  const redirectToAccount = () => {
    // if (!user) return;

    window.open(
      'https://www.spotify.com/pl/account/overview/?utm_source=spotify&utm_medium=menu&utm_campaign=your_account',
      '_blank',
      'noopener noreferrer'
    );

    // navigate(user.href, { });

    // console.log('redirect to account');
  };

  const handleLogout = () => {
    Cookies.remove('refresh_token');

    navigate('/');
  };

  return (
    <div className="sticky top-0 left-0 right-0 z-30">
      {/* <div style={{ opacity: 0, background: 'rgb(72, 32, 176)' }} className="absolute top-0 left-0 right-0 h-16"></div> */}
      <div
        style={{ background: 'rgb(72, 32, 176, 0)' }}
        className="relative flex items-center justify-between w-full h-16 px-6"
      >
        <div className="flex gap-2">
          <Button
            icon="chevron-left"
            variant="tertiary"
            scale={false}
            disabled={false}
            ariaLabel="Wstecz"
            onClick={() => navigate(-1)}
          />
          <Button
            icon="chevron-right"
            variant="tertiary"
            scale={false}
            disabled={false}
            ariaLabel="Dalej"
            onClick={() => navigate(1)}
          />
        </div>
        <div className="flex gap-2">
          {/* <Button icon="bell" variant="secondary" ariaLabel="Nowości" /> */}
          {user && (
            <Dropdown
              button={
                <Button variant="secondary" ariaLabel={user.display_name}>
                  <img src={user.images[0].url} alt="profile-pic" className="object-cover w-6 h-6 rounded-full" />
                </Button>
              }
            >
              <Dropdown.Item borderBottom onClick={redirectToAccount}>
                <span>Konto</span>
                <Icon name="external-link" />
              </Dropdown.Item>
              {/* <Dropdown.Item>Profil</Dropdown.Item> */}
              {/* <Dropdown.Item borderBottom>Ustawienia</Dropdown.Item> */}
              <Dropdown.Item onClick={handleLogout}>Wyloguj</Dropdown.Item>
            </Dropdown>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
