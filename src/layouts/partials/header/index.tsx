import Button from '~~/Button';
import { Dropdown, DropdownItem } from '~~/Dropdown';
import Icon from '~~/Icon';

const Header = () => {
  return (
    <div className="sticky top-0 left-0 right-0 z-30">
      {/* <div style={{ opacity: 0, background: 'rgb(72, 32, 176)' }} className="absolute top-0 left-0 right-0 h-16"></div> */}
      <div
        style={{ background: 'rgb(72, 32, 176, 0)' }}
        className="relative flex items-center justify-between w-full h-16 px-6"
      >
        <div className="flex gap-2">
          <Button icon="chevron-left" variant="tertiary" scale={false} ariaLabel="Wstecz" />
          <Button icon="chevron-right" variant="tertiary" scale={false} ariaLabel="Dalej" />
        </div>
        <div className="flex gap-2">
          <Button icon="bell" variant="secondary" ariaLabel="Nowości" />
          <Dropdown
            button={
              <Button variant="secondary" ariaLabel="Jaa">
                <img
                  src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1853828564884255&height=50&width=50&ext=1697615769&hash=AeSS139Pv-6jsIgmjQg"
                  alt="profile-pic"
                  className="object-cover w-6 h-6 rounded-full"
                />
              </Button>
            }
          >
            <DropdownItem>
              <span>Konto</span>
              <Icon name="external-link" />
            </DropdownItem>
            <DropdownItem>Profil</DropdownItem>
            <DropdownItem borderBottom>Ustawienia</DropdownItem>
            <DropdownItem>Wyloguj</DropdownItem>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;
