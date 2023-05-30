import { Link } from 'react-router-dom';
import { sexto } from '../articles/articulos';
import Atras from './Atras';
const Sexto = () => {
  return (
    <main>
      <Atras url={'/'} />
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
