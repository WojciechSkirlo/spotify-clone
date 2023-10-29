import { ReactNode } from 'react';
import { useColor } from 'color-thief-react';
import Heading from '~~/Heading';

type BannerProps = {
  title: string;
  type: string;
  image: string;
  children?: ReactNode;
};

const Banner = ({ title, type, image, children }: BannerProps) => {
  const { data: color } = useColor(image, 'rgbString', { crossOrigin: 'Anonymous' });

  return (
    <>
      <div
        style={{ backgroundColor: color }}
        className="absolute top-0 left-0 z-20 flex items-end w-full gradient-banner h-[30vh] max-h-[400px] min-h-[360px];"
      >
        <div style={{ backgroundColor: color }} className="absolute gradient h-[232px] left-0 w-full top-full"></div>
      </div>
      <section className="relative z-20 flex pb-6 h-[calc(30vh-72px)] max-h-[328px] min-h-[288px]">
        <div className="flex items-end flex-1">
          <div className="w-[232px] h-[232px] bg-black/70 mr-6 flex-shrink-0">
            <img src={image} alt="cover" className="object-cover w-full h-full shadow-cover" />
          </div>
          <div className="flex flex-col justify-end">
            <span className="mb-[11px] text-sm first-letter:uppercase">{type}</span>
            <Heading size="3xl" className="mt-1 mb-5 line-clamp-3 xl:line-clamp-2">
              {title}
            </Heading>
            <Banner.Info>{children}</Banner.Info>
          </div>
        </div>
      </section>
    </>
  );
};

type BannerInfoProps = {
  children: ReactNode;
};

const BannerInfo = ({ children }: BannerInfoProps) => {
  return <div className="flex items-center text-sm">{children}</div>;
};

Banner.Info = BannerInfo;

export default Banner;
