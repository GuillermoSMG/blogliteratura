import { useParams } from 'react-router-dom';
import { cuarto } from '../articles/articulos';
import Atras from './Atras';

const CuartoDetail = () => {
  const { name } = useParams();
  const article = cuarto.filter(art => art.name === name);
  return (
    <main>
      <Atras url={'/cuarto'} />
      <article>
        <h2>{article[0].title}</h2>
        <p>{article[0].analisis}</p>
        <h2>Cuarto</h2>
      </article>
    </main>
  );
};

export default CuartoDetail;
