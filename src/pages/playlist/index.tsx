import { Link } from 'react-router-dom';
import Heading from '~~/Heading';
import Icon from '~~/Icon';
import Button from '~~/Button';
import Dropdown from '~~/Dropdown';
import List from '~~/List';

const PlaylistPage = () => {
  return (
    <>
      <div
        style={{ backgroundColor: 'rgb(120, 112, 160)' }}
        className="h-[30vh] flex items-end max-h-[400px] mt-[-64px] min-h-[360px] w-full top-0 left-0 z-20 gradient-playlist"
      >
        <div className="flex flex-1 p-6">
          <div className="w-[232px] h-[232px] bg-black/70 mr-6">
            <img
              src="https://mosaic.scdn.co/300/ab67616d00001e0251601671f5c9bfde9f3465beab67616d00001e0290f0c9b6a8673fafd11c781aab67616d00001e0293768ed78764eaffc45b076dab67616d00001e02aefd88c6793b26679a570036"
              alt="cover"
              className="w-full h-full shadow-cover"
            />
          </div>
          <div className="flex flex-col justify-end">
            <span className="mb-3 text-sm">Playlista</span>
            <Heading size="3xl" className="mt-1 mb-5">
              neww 2022 November
            </Heading>
            <div className="flex items-center gap-1 text-sm">
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 overflow-hidden rounded-full">
                  <img
                    src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1853828564884255&height=50&width=50&ext=1698060689&hash=AeT9qdpOmekFSG9dI48"
                    alt="profile"
                    className="object-cover w-full h-full"
                  />
                </div>
                <Link to="/" className="font-bold hover:underline">
                  Wojciech Skirło
                </Link>
              </div>
              <span>• 23 utwory,</span>
              <span className="text-white/70">1 godz. 9 min</span>
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
          <Dropdown.Item>Dodaj do kolejki</Dropdown.Item>
          <Dropdown.Item borderBottom>Usuń z profilu</Dropdown.Item>
          <Dropdown.Item>Edytuj szczegóły</Dropdown.Item>
          <Dropdown.Item>Utwórz podobną playlistę</Dropdown.Item>
          <Dropdown.Item>Usuń</Dropdown.Item>
          <Dropdown.Item>Nie uwzględniaj w profilu słuchacza</Dropdown.Item>
          <Dropdown.Item borderBottom>Przenieś do folderu</Dropdown.Item>
          <Dropdown.Item borderBottom>Udostępnij</Dropdown.Item>
          <Dropdown.Item borderBottom>Informacje o rekomendacjach</Dropdown.Item>
          <Dropdown.Item>Otwórz w aplikacji na komputerze</Dropdown.Item>
        </Dropdown>
      </div>

      <div className="px-6 pb-10">
        <List>
          <List.Item />
          <List.Item />
        </List>
      </div>
    </>
  );
};

export default PlaylistPage;
