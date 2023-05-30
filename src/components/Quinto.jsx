import { Link } from 'react-router-dom';
import { quinto } from '../articles/articulos';
const Quinto = () => {
  return (
    <main>
      <h2>Quinto</h2>
      <ul>
        {quinto.map(article => (
          <li key={article.name}>
            <Link to={`/quinto/${article.name}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Quinto;
