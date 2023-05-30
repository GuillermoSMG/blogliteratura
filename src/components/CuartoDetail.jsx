import { useParams } from 'react-router-dom';
import { cuarto } from '../articles/articulos';

const CuartoDetail = () => {
  const { name } = useParams();
  const article = cuarto.filter(art => art.name === name);
  return (
    <main>
      <article>
        <h2>{article[0].title}</h2>
        <p>{article[0].analisis}</p>
        <h2>Cuarto</h2>
      </article>
    </main>
  );
};

export default CuartoDetail;
