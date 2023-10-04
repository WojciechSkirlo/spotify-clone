import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { Link } from 'react-router-dom';
import { Album } from '@/types';
import Banner from '@/pages/album/components/Banner';
import Icon from '~~/Icon';
import Button from '~~/Button';
import Dropdown from '~~/Dropdown';
import List from '~~/List';

const AlbumPage = () => {
  const { albumId } = useParams();
  const { data, error } = useSWR<Album>(`/albums/${albumId}`);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (error) return <>Error :/</>;
  if (!data) return <>Loading...</>;

  return (
    <>
      <Banner data={data} />

      <div className="flex items-center gap-8 p-6">
        <button
          type="button"
          aria-label="play"
          className="flex items-center justify-center text-black transition-opacity duration-300 transform rounded-full shadow-md h-14 w-14 hover:scale-105 bg-malachite"
        >
          <Icon name="play-smaller" size="lg" />
        </button>
        <Dropdown button={<Button icon="dots" size="xl" ariaLabel="Więcej opcji dla: neww 2022 November" />}>
          <Dropdown.Item>Dodaj do biblioteki</Dropdown.Item>
          <Dropdown.Item>Dodaj do kolejki</Dropdown.Item>
          <Dropdown.Item borderBottom>Przejdź do radia wykonawcy</Dropdown.Item>
          <Dropdown.Item borderBottom>Dodaj do playlisty</Dropdown.Item>
          <Dropdown.Item borderBottom>Udostępnij</Dropdown.Item>
          <Dropdown.Item>Otwórz w aplikacji na komputerze</Dropdown.Item>
        </Dropdown>
      </div>

      <div className="px-6 pb-10 max-w-[1955px]">
        <List data={data.tracks.items}>
          <List.Col header="#" center>
            <span className="text-base lining-nums">1</span>
          </List.Col>
          <List.Col header="Tytuł">
            <div>
              <Link to="/" className="text-base leading-none text-white hover:underline">
                a place to call home
              </Link>
              <div>
                <span className="rounded-sm mr-2 inline-flex leading-[10px] text-[9px] py-[3px] px-[5px] bg-white/60 text-cod-gray-500">
                  E
                </span>
                <Link to="/" className="hover:underline">
                  NÜ
                </Link>
                <span>, </span>
                <Link to="/" className="hover:underline">
                  Nvr/Mnd
                </Link>
              </div>
            </div>
          </List.Col>
          <List.Col header="Time" className="justify-end mr-8">
            <Button icon="heart" />
            <span className="ml-8">1:30</span>
          </List.Col>
        </List>
      </div>
    </>
  );
};

export default AlbumPage;
