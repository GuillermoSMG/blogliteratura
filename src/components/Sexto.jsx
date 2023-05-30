import { Link } from 'react-router-dom';
import { sexto } from '../articles/articulos';
const Sexto = () => {
  return (
    <main>
      <h2>Sexto</h2>
      <ul>
        {sexto.map(article => (
          <li key={article.name}>
            <Link to={`/sexto/${article.name}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Sexto;
