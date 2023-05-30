import { useParams } from 'react-router-dom';
import { tercero } from '../articles/articulos';
import Atras from './Atras';

const TerceroDetail = () => {
  const { name } = useParams();
  const article = tercero.filter(art => art.name === name);
  return (
    <main>
      <Atras url='/tercero' />
      <article>
        <h2>{article[0].title}</h2>
        <p>{article[0].analisis}</p>
      </article>
    </main>
  );
};

export default TerceroDetail;
