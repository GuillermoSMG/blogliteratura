import { Link } from 'react-router-dom';
import { tercero } from '../articles/articulos';
import Atras from './Atras';
const Tercero = () => {
  return (
    <main>
      <Atras url={'/'} />
      <h2>Tercero</h2>
      <ul>
        {tercero.map(article => (
          <li key={article.name}>
            <Link to={`/tercero/${article.name}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Tercero;
