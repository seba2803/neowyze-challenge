import CardFilm from '@/pages/components/films/CardFilm';
import { getAllFilms } from '@/services/services';

export default async function Films() {
  const films = await getAllFilms();

  return (
    <div>
      {films.map((film, index) => {
        return <CardFilm key={index} film={film} />;
      })}
    </div>
  );
}
