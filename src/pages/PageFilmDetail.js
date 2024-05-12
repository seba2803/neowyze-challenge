import { Suspense } from 'react';
import FilmsDetail from './components/films/FilmsDetail';

export default async function PageFilmDetail() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      {' '}
      <FilmsDetail />
    </Suspense>
  );
}
