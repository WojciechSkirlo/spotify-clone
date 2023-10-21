import { Link } from 'react-router-dom';
import Heading from '~~/Heading';

type BannerProps = {
  title: string;
  type: string;
  cover: string;
  user: {
    img: string;
    link: string;
    name: string;
  };
  info?: {
    album?: {
      name: string;
      id: string;
    };
    date?: string;
    numberOfTracks?: number;
    duration?: string;
    playcount?: number;
  };
};

const Banner = ({ title, type, cover, user, info }: BannerProps) => {
  return (
    <>
      <div
        style={{ backgroundColor: 'rgb(24, 24, 64)' }}
        className="h-[30vh] flex items-end max-h-[400px] mt-[-64px] min-h-[360px] w-full top-0 left-0 z-20 gradient-playlist"
      >
        <div className="flex items-end flex-1 p-6">
          <div className="w-[232px] h-[232px] bg-black/70 mr-6 flex-shrink-0">
            <img src={cover} alt="cover" className="w-full h-full shadow-cover" />
          </div>
          <div className="flex flex-col justify-end">
            <span className="mb-[11px] text-sm first-letter:uppercase">{type}</span>
            <Heading size="3xl" className="mt-1 mb-5">
              {title}
            </Heading>
            <div className="flex items-center text-sm">
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 overflow-hidden rounded-full">
                  <img src={user.img} alt="profile" className="object-cover w-full h-full" />
                </div>
                <Link to={user.link} className="font-bold hover:underline">
                  {user.name}
                </Link>
              </div>
              {info?.album && (
                <>
                  <span className="mx-1">•</span>
                  <Link to={`/album/${info.album.id}`} className="hover:underline">
                    {info.album.name}
                  </Link>
                </>
              )}
              {info?.date && (
                <>
                  <span className="mx-1">•</span>
                  <span>{info.date}</span>
                </>
              )}
              {info?.numberOfTracks && (
                <>
                  <span className="mx-1">•</span>
                  <span>{info.numberOfTracks} utworów</span>
                </>
              )}
              {info?.playcount && (
                <>
                  <span className="mx-1">•</span>
                  <span>{info.playcount}</span>
                </>
              )}
              {info?.duration && <span className="text-white/70">&nbsp;{info?.duration}</span>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
