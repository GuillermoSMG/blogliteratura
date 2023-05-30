import { useParams } from 'react-router-dom';
import { quinto } from '../articles/articulos';

const QuintoDetail = () => {
  const { name } = useParams();
  const article = quinto.filter(art => art.name === name);
  return (
    <main>
      <article>
        <h2>{article[0].title}</h2>
        <p>{article[0].analisis}</p>
        <h2>Quinto</h2>
      </article>
    </main>
  );
};

export default QuintoDetail;
