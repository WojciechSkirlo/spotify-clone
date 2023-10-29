import { Link } from 'react-router-dom';
import Heading from '~~/Heading';

type CardProps = {
  img: string;
  header: string;
  description: string;
  link: string;
};

const Card = ({ img, header, description, link }: CardProps) => {
  return (
    <Link to={link}>
      <div className="h-full p-4 transition-colors duration-300 rounded-md bg-cod-gray-400 hover:bg-mine-shaft-500">
        <div className="mb-4 aspect-square">
          <img src={img} alt="card-img" className="object-cover object-center w-full h-full rounded-md" />
        </div>
        <Heading size="base" className="mb-1 line-clamp-3">
          {header}
        </Heading>
        <p className="text-sm text-silver-chalice line-clamp-2">{description}</p>
      </div>
    </Link>
  );
};

export default Card;
