import { Link } from 'react-router-dom';
import Heading from '~~/Heading';
import Card from '~~/Card';
import Icon from '~~/Icon';

const DUMMY_DATA = [
  {
    id: 1,
    img: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb63a65de1f3d0224a2a901343/1/pl/default',
    header: 'Daily Mix 1',
    description: 'James Arthur, Ed Sheeran, Lewis Capaldi i więcej'
  },
  {
    id: 2,
    img: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb0f0333a3991c01ec3741e26c/2/pl/default',
    header: 'Daily Mix 2',
    description: 'Caleb Hearn, gavn!, Kodaline i więcej'
  },
  {
    id: 3,
    img: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb72c4ca30476ce87954961a10/3/pl/default',
    header: 'Daily Mix 3',
    description: 'Alec Benjamin, Billie Eilish, Tate McRae i więcej'
  },
  {
    id: 4,
    img: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb9726909ad3892b2231bb9153/4/pl/default',
    header: 'Daily Mix 4',
    description: 'sanah, Sylwia Grzeszczak, Lady Pank i więcej'
  },
  {
    id: 5,
    img: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb110a76fa4b833ce1cd25c669/5/pl/default',
    header: 'Daily Mix 5',
    description: 'Anson Seabra, Haley Joelle, Ike Dweck i więcej'
  },
  {
    id: 6,
    img: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb57138b98e7ddd5a86ee97a9b/6/pl/default',
    header: 'Daily Mix 6',
    description: 'OneRepublic, Snow Patrol, Coldplay i więcej'
  }
];

const Index = () => {
  return (
    <>
      {/* Recommended */}
      <section>
        <div className="flex items-start justify-between mb-5">
          <Heading size="2xl">Dobry wieczór</Heading>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-px gap-y-3 xl:grid-cols-3">
          {DUMMY_DATA.map((item) => (
            <div
              className="flex h-20 overflow-hidden transition-colors duration-300 rounded cursor-pointer group bg-white/10 hover:bg-white/20"
              key={item.id}
            >
              <div className="shadow">
                <img
                  src="https://i.scdn.co/image/ab67616d0000b273e85259a1cae29a8d91f2093d"
                  alt="img"
                  className="w-20 h-20"
                />
              </div>
              <div className="flex items-center justify-between flex-1 gap-4 p-4">
                <a href="#" className="font-semibold">
                  GUTS
                </a>
                <button
                  type="button"
                  aria-label="play"
                  className="flex items-center justify-center w-12 h-12 text-black transition-opacity duration-300 transform rounded-full shadow-md opacity-0 hover:scale-105 bg-malachite group-hover:opacity-100"
                >
                  <Icon name="play-smaller" size="lg" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <div className="flex items-start justify-between mb-4">
          <Heading size="xl">
            <Link to="/search" className="hover:underline">
              Przygotowano dla Jaa
            </Link>
          </Heading>
          <Link to="/search" className="text-sm font-bold text-nobel h-7.5 flex items-center hover:underline">
            Pokaż wszystko
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-9">
          {DUMMY_DATA.map((item) => (
            <Card key={item.id} img={item.img} header={item.header} description={item.description} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Index;
