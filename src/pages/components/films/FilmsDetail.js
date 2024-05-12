'use client';
import { Suspense, useEffect } from 'react';
import { state, getFilm, getPeople } from '@/services/services';
import CardFilm from './CardFilm';
import { useRouter } from 'next/navigation';

export default function FilmDetail() {
  const router = useRouter();

  useEffect(() => {
    //* extraigo el id de session storage
    const id = window.sessionStorage.getItem('Id');
    //? funcion que ejecuta los metodos de fetching de datos
    const fetchData = async () => {
      //* ejecuto los metodos para obtener los datos de la api
      await getFilm(id);
      await getPeople();
    };
    fetchData();
    //? se hace un redireccionamiento con delay para darle tiempo a la llegada de la info
    setTimeout(() => {
      state.People.length && router.push('/films');
    }, 100);
    setTimeout(() => {
      window.localStorage.setItem('People', JSON.stringify(state.People));
      router.push('/films/detail');
    }, 100);
    // console.log('fuera del fetch', state.People);
  }, [getFilm, getPeople]);

  return <div>{state.Film.director && <CardFilm film={state.Film} />}</div>;
}
