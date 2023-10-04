import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Button from '~~/Button';
import Icon from './Icon';

type ListProps = {
  data: any[];
  children?: ReactNode;
};

const List = ({ data, children }: ListProps) => {
  return (
    <div>
      <div
        style={{
          gridTemplateColumns: '16px 4fr minmax(120px, 1fr)'
        }}
        className="grid items-center gap-4 px-4 mx-px mt-px mb-4 text-sm border-b h-9 text-nobel border-white/10"
      >
        <div className="flex justify-end text-base">
          <span>#</span>
        </div>
        <div>
          <span>Tytuł</span>
        </div>
        <div className="flex justify-end mr-8">
          <Icon name="clock" />
        </div>
      </div>

      {data.map((_, index) => (
        <div
          key={index}
          style={{
            gridTemplateColumns: '16px 4fr minmax(120px, 1fr)'
          }}
          className="grid items-center gap-4 px-4 text-sm border border-transparent rounded text-silver-chalice h-14 hover:bg-white/10"
        >
          {children}
        </div>
      ))}
    </div>
  );
};

type ListColProps = {
  header?: string;
  center?: boolean;
  className?: string;
  children?: ReactNode;
};

const ListCol = ({ header, center, className, children }: ListColProps) => {
  return (
    <div className={`flex items-center ${center ? 'justify-center text-center' : ''} ${className}`}>{children}</div>
  );
};

List.Col = ListCol;

export default List;
