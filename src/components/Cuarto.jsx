import { Link } from 'react-router-dom';
import { cuarto } from '../articles/articulos';
import Atras from './Atras';
const Cuarto = () => {
  return (
    <main>
      <Atras url={'/'} />
      <h2>Cuarto</h2>
      <ul>
        {cuarto.map(article => (
          <li key={article.name}>
            <Link to={`/cuarto/${article.name}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Cuarto;
