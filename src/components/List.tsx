import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Button from '~~/Button';

type TracksProps = {
  children?: ReactNode;
};

const List = ({ children }: TracksProps) => {
  return <div>{children}</div>;
};

const ListItem = () => {
  return (
    <div
      style={{
        gridTemplateColumns: '16px 6fr 4fr 3fr minmax(120px, 1fr)'
      }}
      className="grid items-center gap-4 px-4 text-sm border border-transparent rounded text-silver-chalice h-14 hover:bg-white/30"
    >
      <div className="text-center">
        <span className="text-base lining-nums">1</span>
      </div>
      <div className="flex items-center">
        <div className="w-10 h-10 mr-4 bg-mine-shaft-500">
          <img src="https://i.scdn.co/image/ab67616d0000485190f0c9b6a8673fafd11c781a" alt="cover" />
        </div>
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
      </div>
      <div>
        <Link to="/" className="hover:underline">
          a place to call home
        </Link>
      </div>
      <div>
        <span>12 lis 2022</span>
      </div>
      <div className="flex items-center">
        <Button icon="heart" />
        <span className="ml-8">1:30</span>
      </div>
    </div>
  );
};

List.Item = ListItem;

export default List;
