import { Link } from 'react-router-dom';
import Heading from '~~/Heading';

type CardProps = {
  img: string;
  header: string;
  description: string;
};

const defaultProps: CardProps = {
  img: '',
  header: '',
  description: ''
};

const Card = ({ img, header, description }: CardProps) => {
  return (
    <Link to="/search">
      <div className="p-4 bg-[#181818] transition-colors h-full duration-300 rounded hover:bg-[#282828]">
        <div className="mb-4">
          <img src={img} alt="" className="object-cover object-center w-full h-full rounded" />
        </div>
        <Heading size="lg" className="mb-1">
          {header}
        </Heading>
        <p className="text-sm text-subdued line-clamp-2">{description}</p>
      </div>
    </Link>
  );
};

Card.defaultProps = defaultProps;
export default Card;
