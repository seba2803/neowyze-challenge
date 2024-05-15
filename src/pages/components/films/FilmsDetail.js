'use client';
import { state, getFilm, getPeople } from '@/services/services';
import CardFilm from './CardFilm';
import { Suspense, useEffect, useState } from 'react';

export default function FilmDetail() {
  const [film, setFilm] = useState({});

  useEffect(() => {
    //* funcion asyncrona autoinvocada
    (async () => {
      // * si window existe en el entorno que acceda a él
      if (typeof window !== undefined) {
        //* extraigo el id de session storage para obtener el film correspondiente
        const id = window.sessionStorage.getItem('Id');
        if (!state.Film.length) {
          //* ejecuto los metodos para obtener los datos de la api
          await getFilm(id);
          await getPeople();
          //* si el estado People tiene elementos entonces que lo  cargue en el localSotrage
          state.People.length &&
            window.localStorage.setItem('People', JSON.stringify(state.People));
        }
      }
    })().then(() => {
      setFilm(state.Film);
    });
  }, [setFilm]);

  return (
    <Suspense fallback={<div>Cargando film...</div>}>
      <div>{film.director && <CardFilm film={film} />}</div>
    </Suspense>
  );
}
