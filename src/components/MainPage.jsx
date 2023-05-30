import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='w-2/3 text-xl font-semibold'>
        Bienvenidos al blog literario para estudiantes de{' '}
        <Link
          className='text-blue-500'
          to='/tercero'
        >
          tercero
        </Link>
        ,{' '}
        <Link
          className='text-blue-500'
          to='/cuarto'
        >
          cuarto
        </Link>
        ,
        <Link
          className='text-blue-500'
          to='/quinto'
        >
          quinto
        </Link>{' '}
        y{' '}
        <Link
          className='text-blue-500'
          to='/sexto'
        >
          sexto
        </Link>
        . Aquí encontrarás un espacio dedicado al maravilloso y apasionante
        mundo de la literatura. ¡Acompáñanos en este viaje literario y déjate
        cautivar por la magia de las palabras!
      </p>
      <img
        src='/pluma.png'
        alt=''
      />
      <img
        src='/reading.png'
        alt=''
      />
    </div>
  );
};

export default MainPage;
