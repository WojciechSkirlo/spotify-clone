import { ReactNode } from 'react';

type Size = 'base' | 'lg' | 'xl' | '2xl' | '3xl';
type HeadingProps = {
  size?: Size;
  children: ReactNode;
  className?: string;
};

const Heading = ({ children, size = 'lg', className = '' }: HeadingProps) => {
  const Headings: Record<Size, JSX.Element> = {
    '3xl': <h1 className={`text-2xl xl:text-3xl 2xl:text-4xl font-black ${className}`}>{children}</h1>,
    '2xl': <h2 className={`text-2xl font-bold ${className}`}>{children}</h2>,
    xl: <h2 className={`text-xl font-bold ${className}`}>{children}</h2>,
    lg: <h3 className={`text-lg font-bold ${className}`}>{children}</h3>,
    base: <h4 className={`text-base font-bold ${className}`}>{children}</h4>
  };

  return Headings[size];
};

export default Heading;
