import { useRef } from 'react';
import { Link } from 'react-router-dom';

const pages = [
  { label: 'Tercero', link: '/tercero' },
  { label: 'Cuarto', link: '/cuarto' },
  { label: 'Quinto', link: '/quinto' },
  { label: 'Sexto', link: '/sexto' },
];

const Navbar = () => {
  const close = useRef();

  const closeMenu = () => {
    close.current.classList.toggle('hidden');
  };

  return (
    <header className='bg-green-600 flex items-center justify-between p-4'>
      <a href='/'>
        <h1 className='text-4xl text-white font-bold hidden md:block'>
          Rincón Literario
        </h1>
        <h1 className='text-3xl text-white font-bold block md:hidden'>RL</h1>
      </a>
      <button
        className='absolute top-4 right-4 md:hidden'
        onClick={closeMenu}
      >
        <img
          className='w-8'
          src='/white-menu.png'
          alt='Menu'
        />
      </button>
      <nav
        ref={close}
        className='md:mr-10 hidden md:flex md:block items-center'
      >
        <ul className='flex md:flex bg-black/60 py-[30vh] px-[2em] backdrop-blur-md gap-[2em] md:backdrop-blur-none md:bg-inherit md:p-0 text-white text-lg font-semibold flex-col md:flex-row fixed md:static md:top-auto top-0 md:right-auto right-0 bottom-0 md:bottom-auto left-1/3 md:left-auto'>
          <button
            onClick={closeMenu}
            className='absolute top-4 right-4 md:hidden'
          >
            <img
              src='/white-close.png'
              alt='Close menu'
              className='w-8'
            />
          </button>
          {pages.map(page => (
            <li key={page.label}>
              <Link
                to={page.link}
                className='font-bold text-xl'
              >
                {page.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
