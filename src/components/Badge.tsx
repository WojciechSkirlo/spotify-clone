import { ReactNode } from 'react';

type BadgeProps = {
  children?: ReactNode;
};

const Badge = ({ children }: BadgeProps) => {
  return (
    <span className="inline-block px-3 py-1 text-sm leading-6 text-white bg-[#ffffff12] transition-colors duration-200 cursor-pointer hover:bg-[#ffffff1a] rounded-full">
      {children}
    </span>
  );
};

export default Badge;
