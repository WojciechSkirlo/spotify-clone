import { ReactNode } from 'react';

type Sizes = '2xl' | 'xl' | 'lg' | 'base';
type HeadingProps = {
  size: Sizes;
  children?: ReactNode;
  className?: string;
};

const defaultProps: HeadingProps = {
  size: 'lg',
  className: ''
};

const Heading = ({ children, size, className }: HeadingProps) => {
  const Headings: Record<Sizes, JSX.Element> = {
    '2xl': <h1 className={`text-2xl font-bold ${className}`}>{children}</h1>,
    xl: <h2 className={`text-xl font-bold ${className}`}>{children}</h2>,
    lg: <h3 className={`text-lg font-bold ${className}`}>{children}</h3>,
    base: <h4 className={`text-base font-bold ${className}`}>{children}</h4>
  };

  return Headings[size];
};

Heading.defaultProps = defaultProps;
export default Heading;
