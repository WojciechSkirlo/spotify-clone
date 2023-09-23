import { ReactNode } from 'react';
import Tippy from '@tippyjs/react/headless';

type DropdownProps = {
  button?: ReactNode;
  children?: ReactNode;
};

const Dropdown = ({ button, children }: DropdownProps) => {
  return (
    <Tippy
      trigger="click"
      placement="bottom-start"
      interactive
      maxWidth={350}
      offset={[0, 8]}
      render={(attrs) => (
        <div className="min-w-[196px] p-1 rounded bg-mine-shaft-500 shadow-lg" {...attrs}>
          <ul>{children}</ul>
        </div>
      )}
    >
      <div>{button}</div>
    </Tippy>
  );
};

export default Dropdown;
