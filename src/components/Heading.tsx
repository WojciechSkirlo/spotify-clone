import { ReactNode } from 'react';

type Sizes = '3xl' | '2xl' | 'xl' | 'lg' | 'base';
type HeadingProps = {
  size?: Sizes;
  children: ReactNode;
  className?: string;
};

const Heading = ({ children, size = 'lg', className = '' }: HeadingProps) => {
  const Headings: Record<Sizes, JSX.Element> = {
    '3xl': <h1 className={`text-3xl xl:text-4xl font-black ${className}`}>{children}</h1>,
    '2xl': <h2 className={`text-2xl font-bold ${className}`}>{children}</h2>,
    xl: <h2 className={`text-xl font-bold ${className}`}>{children}</h2>,
    lg: <h3 className={`text-lg font-bold ${className}`}>{children}</h3>,
    base: <h4 className={`text-base font-bold ${className}`}>{children}</h4>
  };

  return Headings[size];
};

export default Heading;
