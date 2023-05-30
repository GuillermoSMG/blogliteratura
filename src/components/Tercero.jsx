import { Link } from 'react-router-dom';
import { tercero } from '../articles/articulos';
const Tercero = () => {
  return (
    <main>
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
