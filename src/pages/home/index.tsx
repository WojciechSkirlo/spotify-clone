import Heading from '~~/Heading';
import Card from '~~/Card';
import Recommended from '@/pages/home/components/Recommended';

const DUMMY_DATA = [
  {
    id: 1,
    title: 'Najlepsze utwory wykonawcy',
    children: [
      {
        id: '37i9dQZF1DWWxPM4nWdhyI',
        img: 'https://i.scdn.co/image/ab67706f000000021d5bbda37b600608832909bc',
        header: 'This is Ed Sheeran',
        description: 'All his biggest hits, in one place.'
      }
    ]
  }
];

const IndexPage = () => {
  return (
    <>
      <Recommended />

      {DUMMY_DATA.map((item) => (
        <section className="mt-10" key={item.id}>
          <div className="flex items-start justify-between mb-4">
            <Heading size="xl">{item.title}</Heading>
          </div>
          <div className="grid grid-cols-2 gap-2 lg:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 4xl:grid-cols-8 5xl:grid-cols-9">
            {item.children.map((el) => (
              <Card
                key={el.id}
                img={el.img}
                header={el.header}
                description={el.description}
                link={`/playlist/${el.id}`}
              />
            ))}
          </div>
        </section>
      ))}
    </>
  );
};

export default IndexPage;
