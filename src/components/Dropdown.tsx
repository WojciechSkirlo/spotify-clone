import { ReactNode } from 'react';
import Tippy from '@tippyjs/react/headless';

type DropdownProps = {
  title?: string;
  button?: ReactNode;
  children?: ReactNode;
};

const Dropdown = ({ title = '', button, children }: DropdownProps) => {
  return (
    <Tippy
      trigger="click"
      placement="bottom-start"
      interactive
      maxWidth={350}
      offset={[0, 8]}
      render={(attrs) => (
        <div className="min-w-[196px] p-1 rounded bg-mine-shaft-500 shadow-lg" {...attrs}>
          {title && <span className="block p-3 pr-2 text-xs font-bold text-nobel">{title}</span>}
          <ul>{children}</ul>
        </div>
      )}
    >
      <div>{button}</div>
    </Tippy>
  );
};

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
        onClick={onClick}
      >
        {children}
      </button>
    </li>
  );
};

Dropdown.Item = DropdownItem;

export default Dropdown;
