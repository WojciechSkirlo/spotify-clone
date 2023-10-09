import { Link } from 'react-router-dom';
import { Album } from '@/types';
import Heading from '~~/Heading';

type BannerProps = {
  data: Album;
};

const Banner = ({ data }: BannerProps) => {
  return (
    <>
      <div
        style={{ backgroundColor: 'rgb(24, 24, 64)' }}
        className="h-[30vh] flex items-end max-h-[400px] mt-[-64px] min-h-[360px] w-full top-0 left-0 z-20 gradient-playlist"
      >
        <div className="flex flex-1 p-6">
          <div className="w-[232px] h-[232px] bg-black/70 mr-6">
            <img src={data.images[1].url} alt="cover" className="w-full h-full shadow-cover" />
          </div>
          <div className="flex flex-col justify-end">
            <span className="mb-2.5 text-sm first-letter:uppercase">{data.album_type}</span>
            <Heading size="3xl" className="mt-1 mb-5">
              {data.name}
            </Heading>
            <div className="flex items-center text-sm">
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 overflow-hidden rounded-full">
                  <img
                    src={'https://i.scdn.co/image/ab6761610000f178e03a98785f3658f0b6461ec4'}
                    alt="profile"
                    className="object-cover w-full h-full"
                  />
                </div>
                <Link to={`/artist/${data.artists[0].id}`} className="font-bold hover:underline">
                  {data.artists[0].name}
                </Link>
              </div>
              <span className="mx-1">•</span>
              <span>2023</span>
              <span className="mx-1">•</span>
              <span>{data.total_tracks} utworów,</span>
              <span className="text-white/70">&nbsp;39 min 18 sek.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
