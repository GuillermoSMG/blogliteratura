import { useParams } from 'react-router-dom';
import { sexto } from '../articles/articulos';
import Atras from './Atras';

const SextoDetail = () => {
  const { name } = useParams();
  const article = sexto.filter(art => art.name === name);
  return (
    <main>
      <Atras url={'/sexto'} />
      <article>
        <h2>{article[0].title}</h2>
        <p>{article[0].analisis}</p>
        <h2>Sexto</h2>
      </article>
    </main>
  );
};

export default SextoDetail;
