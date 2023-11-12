import { NavLink } from 'react-router-dom';

type ListItemProps = {
  isCollapsed: boolean;
  img: string;
  name: string;
  link: string;
  type: string;
  owner: string | null;
};

const ListItem = ({ isCollapsed, img, name, link, type, owner }: ListItemProps) => {
  return (
    <NavLink to={link} className="flex w-full p-2 rounded gap-x-3 hover:bg-cod-gray-400">
      <div className="flex items-center justify-center w-12 h-12 overflow-hidden rounded bg-mine-shaft-500">
        <img src={img} alt={name} className="object-cover" />
      </div>
      {!isCollapsed && (
        <div className="text-left hidden md:flex flex-col gap-y-0.5">
          <p className="">{name}</p>
          <p className="text-sm capitalize text-silver-chalice">
            {type} {owner ? `• ${owner}` : ''}
          </p>
        </div>
      )}
    </NavLink>
  );
};

export default ListItem;
