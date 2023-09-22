import { ReactNode } from 'react';

type DropdownItemProps = {
  borderBottom?: boolean;
  children?: ReactNode;
  onClick?: () => void;
};

const DropdownItem = ({ borderBottom, children, onClick }: DropdownItemProps) => {
  return (
    <li>
      <button
        type="button"
        className={`flex items-center justify-between w-full h-10 gap-2 p-3 pr-2 text-sm rounded-sm cursor-default hover:bg-white/10 text-white/90 
        ${borderBottom ? 'border-b border-white/10' : ''}`}
        onClick={() => onClick}
      >
        {children}
      </button>
    </li>
  );
};

export default DropdownItem;
