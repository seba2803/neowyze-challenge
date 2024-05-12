'use client';
import { Suspense } from 'react';
import FilmsDetail from './components/films/FilmsDetail';
import CardPerson from './components/people/CardPerson';
import { showState } from '@/utils/utils';

export default function PageFilmDetail() {
  const storage = window.localStorage.getItem('People');
  const people = JSON.parse(storage);
  const peopleFromFilm = showState(people);

  return (
    <Suspense fallback={<div>Cargando...</div>}>
      {' '}
      <div className='grid grid-cols-2 place-items-center'>
        <FilmsDetail />
        <div className='grid grid-cols-2 bg-slate-700 gap-2 overflow-auto w-full h-96 p-3 m-3 rounded-xl place-items-center'>
          {peopleFromFilm.length &&
            peopleFromFilm.map((person, index) => {
              return <CardPerson key={index} person={person} />;
            })}
        </div>
      </div>
    </Suspense>
  );
}
