import IconButton from '~~/IconButton';
import Dropdown from '~~/dropdown/Dropdown';
import DropdownItem from '~~/dropdown/DropdownItem';
import Icon from '~~/Icon';

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full h-16 px-6">
      <div className="flex gap-2">
        <IconButton icon="chevron-left" variant="tertiary" scale={false} ariaLabel="Wstecz" />
        <IconButton icon="chevron-right" variant="tertiary" scale={false} ariaLabel="Dalej" />
      </div>
      <div className="flex gap-2">
        <IconButton icon="bell" variant="secondary" ariaLabel="Nowości" />
        <Dropdown
          button={
            <IconButton icon="volume" variant="secondary" ariaLabel="Jaa">
              <img
                src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1853828564884255&height=50&width=50&ext=1697615769&hash=AeSS139Pv-6jsIgmjQg"
                alt="profile-pic"
                className="object-cover w-full h-full rounded-full"
              />
            </IconButton>
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
  );
};

export default Header;
