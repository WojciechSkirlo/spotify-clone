import { Link } from 'react-router-dom';
import ListItem from '@/pages/playlist/components/ListItem';
import Heading from '~~/Heading';
import Icon from '~~/Icon';
import Button from '~~/Button';
import { Dropdown, DropdownItem } from '~~/Dropdown';
import type { Album } from '@/types';

const Album = () => {
  return (
    <>
      <div
        style={{ backgroundColor: 'rgb(24, 24, 64)' }}
        className="h-[30vh] flex items-end max-h-[400px] mt-[-64px] min-h-[360px] w-full top-0 left-0 z-20 gradient-playlist"
      >
        <div className="flex flex-1 p-6">
          <div className="w-[232px] h-[232px] bg-black/70 mr-6">
            <img
              src="https://i.scdn.co/image/ab67616d00001e02e85259a1cae29a8d91f2093d"
              alt="cover"
              className="w-full h-full shadow-cover"
            />
          </div>
          <div className="flex flex-col justify-end">
            <span className="mb-3 text-sm">Album</span>
            <Heading size="3xl" className="mt-1 mb-5">
              GUTS
            </Heading>
            <div className="flex items-center gap-1 text-sm">
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 overflow-hidden rounded-full">
                  <img
                    src="https://i.scdn.co/image/ab6761610000f178e03a98785f3658f0b6461ec4"
                    alt="profile"
                    className="object-cover w-full h-full"
                  />
                </div>
                <Link to="/" className="font-bold hover:underline">
                  Olivia Rodrigo
                </Link>
              </div>
              <span>• 2023</span>
              <span>• 12 utwory,</span>
              <span className="text-white/70">39 min 18 sek.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-8 p-6">
        <button
          type="button"
          aria-label="play"
          className="flex items-center justify-center text-black transition-opacity duration-300 transform rounded-full shadow-md h-14 w-14 hover:scale-105 bg-malachite"
        >
          <Icon name="play-smaller" size="lg" />
        </button>
        <Dropdown button={<Button icon="dots" size="xl" ariaLabel="Więcej opcji dla: neww 2022 November" />}>
          <DropdownItem>Dodaj do kolejki</DropdownItem>
          <DropdownItem borderBottom>Usuń z profilu</DropdownItem>
          <DropdownItem>Edytuj szczegóły</DropdownItem>
          <DropdownItem>Utwórz podobną playlistę</DropdownItem>
          <DropdownItem>Usuń</DropdownItem>
          <DropdownItem>Nie uwzględniaj w profilu słuchacza</DropdownItem>
          <DropdownItem borderBottom>Przenieś do folderu</DropdownItem>
          <DropdownItem borderBottom>Udostępnij</DropdownItem>
          <DropdownItem borderBottom>Informacje o rekomendacjach</DropdownItem>
          <DropdownItem>Otwórz w aplikacji na komputerze</DropdownItem>
        </Dropdown>
      </div>

      <div className="px-6 pb-10">
        <ListItem />
        <ListItem />
      </div>
    </>
  );
};

export default Album;
