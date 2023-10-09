import { Fragment, ReactNode } from 'react';
import { Column } from '@/types';

type ListProps = {
  columns: Array<Column>;
  data: Array<unknown>;
};

const List = ({ columns, data }: ListProps) => {
  return (
    <div>
      <div
        style={{
          gridTemplateColumns: '16px 4fr minmax(120px, 1fr)'
        }}
        className="grid items-center gap-4 px-4 mx-px mt-px mb-4 text-sm border-b h-9 text-nobel border-white/10"
      >
        {columns.map((column) => (
          <div key={column.id}>{column.header}</div>
        ))}
      </div>

      {data.map((item, index) => (
        <div
          key={index}
          style={{
            gridTemplateColumns: '16px 4fr minmax(120px, 1fr)'
          }}
          className="grid items-center gap-4 px-4 text-sm border border-transparent rounded group text-nobel h-14 hover:bg-white/10"
        >
          {columns.map((column) => (
            <Fragment key={column.id}>{column.item(item, index)}</Fragment>
          ))}
        </div>
      ))}
    </div>
  );
};

type ListHeaderProps = {
  className?: string;
  children?: ReactNode;
};

const ListHeader = ({ className = '', children }: ListHeaderProps) => {
  return <div className={`flex ${className}`}>{children}</div>;
};

type ListItemProps = {
  className?: string;
  children: ReactNode;
};

const ListItem = ({ className = '', children }: ListItemProps) => {
  return <div className={`flex items-center relative ${className}`}>{children}</div>;
};

List.Header = ListHeader;
List.Item = ListItem;

export default List;
