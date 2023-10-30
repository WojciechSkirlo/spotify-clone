import { Fragment, ReactNode } from 'react';

type ListProps = {
  columns: Array<Column>;
  data: Array<unknown>;
  className?: string;
};

const List = ({ columns, data, className }: ListProps) => {
  const gridTemplateColumns = columns.map((column) => column.width ?? '1fr').join(' ');

  return (
    <div className={className}>
      <div
        style={{
          gridTemplateColumns
        }}
        className="grid items-center gap-2 px-2 mx-px mt-px mb-4 text-sm border-b md:gap-4 md:px-4 h-9 text-nobel border-white/10"
      >
        {columns.map((column) => (
          <div key={column.id}>{column.header}</div>
        ))}
      </div>

      {data.map((item, index) => (
        <div
          key={index}
          style={{
            gridTemplateColumns
          }}
          className="grid items-center gap-2 px-2 text-sm border border-transparent rounded md:gap-4 md:px-4 group text-nobel h-14 hover:bg-white/10"
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
  return <div className={`flex items-center text-xs md:text-sm relative ${className}`}>{children}</div>;
};

List.Header = ListHeader;
List.Item = ListItem;

export default List;
