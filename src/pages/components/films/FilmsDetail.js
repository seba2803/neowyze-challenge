'use client';
import { Suspense, useEffect } from 'react';
import { state, clearFilm } from '@/services/services';
import CardFilm from './CardFilm';

export default function FilmDetail() {
  useEffect(() => {
    //* cuando el componente se desmonte se limpia el estado Film
    return () => {
      clearFilm();
    };
  }, []);
  return (
    <div>
      <Suspense fallback={<div>Cargando...</div>}>
        {state.Film.director && <CardFilm film={state.Film} />}
      </Suspense>
    </div>
  );
}
