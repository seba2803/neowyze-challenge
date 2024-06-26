import { getAllFilms, state } from '@/services/services';
import CardFilm from './components/films/CardFilm';
import { Suspense } from 'react';

export default async function PageFilms() {
  await getAllFilms();

  return (
    <div className='grid grid-cols-3 phone:grid-cols-1 tablet:grid-cols-2 gap-4 m-3 place-items-center'>
      {/* Suspense suspende el componente asyncrono y en su lugar muestra el componente de carga que deseemos mostrar */}
      <Suspense fallback={<div>cargando...</div>}>
        {state.Films.length &&
          state.Films[0].map((film, index) => {
            return <CardFilm key={index} film={film} Id={index} />;
          })}
      </Suspense>
    </div>
  );
}
