import { Link } from 'react-router-dom';
import Heading from '~~/Heading';
import Card from '~~/Card';
import Recommended from '@/pages/home/components/Recommended';

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

const IndexPage = () => {
  return (
    <div className="px-6 mt-2 max-w-[1955px]">
      <Recommended />

      {[1, 2, 3, 4].map((item) => (
        <section className="mt-10" key={item}>
          <div className="flex items-start justify-between mb-4">
            <Heading size="xl">
              <Link to="/search" className="hover:underline">
                Przygotowano dla Ciebie
              </Link>
            </Heading>
            <Link to="/search" className="text-sm font-bold text-nobel h-7.5 flex items-center pb-1 hover:underline">
              Pokaż wszystko
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 4xl:grid-cols-8 5xl:grid-cols-9">
            {DUMMY_DATA.map((item) => (
              <Card key={item.id} img={item.img} header={item.header} description={item.description} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default IndexPage;
