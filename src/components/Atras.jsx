import { Link } from 'react-router-dom';

const Atras = ({ url }) => {
  return (
    <Link
      className='text-blue-800 font-semibold'
      to={url}
    >
      Ir atrás
    </Link>
  );
};

export default Atras;
