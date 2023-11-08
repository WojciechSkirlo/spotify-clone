import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Heading from '~~/Heading';
import Icon from '~~/Icon';

const DUMMY_DATA: Recomendation[] = [
  {
    id: 1,
    img: 'https://i.scdn.co/image/ab67616d0000b273e85259a1cae29a8d91f2093d',
    name: 'GUTS',
    link: '/album/1xJHno7SmdVtZAtXbdbDZp'
  },
  {
    id: 2,
    img: 'https://mosaic.scdn.co/300/ab67616d00001e0251601671f5c9bfde9f3465beab67616d00001e0290f0c9b6a8673fafd11c781aab67616d00001e0293768ed78764eaffc45b076dab67616d00001e02aefd88c6793b26679a570036',
    name: 'neww 2022 November',
    link: '/playlist/2UEFzPU7FoVhkzrIPeWv7x'
  },
  {
    id: 3,
    img: 'https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96',
    name: '÷ (Deluxe)',
    link: '/album/3T4tUhGYeRNVUGevb0wThu'
  },
  {
    id: 4,
    img: 'https://i.scdn.co/image/ab67616d00001e02c63b83170e1ff213d53d625a',
    name: 'UCZTA',
    link: '/album/7G9ImTT4M1vC44tkVgtdQz'
  },
  {
    id: 5,
    img: 'https://i.scdn.co/image/ab67616d00001e02e787cffec20aa2a396a61647',
    name: 'Lover',
    link: '/album/1NAmidJlEaVgA3MpcPFYGq'
  },
  {
    id: 6,
    img: 'https://i.scdn.co/image/ab67616d00001e020c8a0405b0035e48ab780eec',
    name: '(Un)Commentary',
    link: '/album/5Wvcnn5547f6xz8F9Kz6rO'
  }
];

interface Recomendation {
  id: number;
  img: string;
  name: string;
  link: string;
}

const Recommended = () => {
  const [data, setData] = useState<Array<Recomendation>>([]);

  useEffect(() => {
    const getData = async () => {
      const response = DUMMY_DATA;

      setData(response);
    };

    getData();
  }, []);

  return (
    <>
      <div className="h-[332px] w-full absolute top-0 left-0 z-20 gradient"></div>
      <section className="relative z-20">
        <div className="flex items-start justify-between mb-5">
          <Heading size="2xl">Dobry wieczór</Heading>
        </div>
        <div className="grid gap-4 pt-px md:grid-cols-2 gap-y-2 lg:gap-y-3 xl:grid-cols-3">
          {data.map((item) => (
            <Link to={item.link} className="font-semibold" key={item.id}>
              <div
                className="flex h-20 overflow-hidden transition-colors duration-300 rounded cursor-pointer group bg-white/10 hover:bg-white/20"
                key={item.id}
              >
                <div className="shadow">
                  <img src={item.img} alt="img" className="w-20 h-20" />
                </div>
                <div className="flex items-center justify-between flex-1 gap-2 p-4">
                  <span className="font-semibold">{item.name}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Recommended;
