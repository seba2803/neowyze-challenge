'use client';
import { Suspense } from 'react';
import FilmsDetail from './components/films/FilmsDetail';
import CardPerson from './components/people/CardPerson';
import { getPeopleFromFilm } from '@/utils/utils';

export default function PageFilmDetail() {
  let storage, people, peopleFromFilm;
  //* si window existe en el entorno entonces que acceda a él
  if (typeof window !== 'undefined') {
    //* obtengo lo que hay en localStorage
    storage = window.localStorage.getItem('People');
    //* parseo a JSON el storage
    people = JSON.parse(storage);
    //* le paso el array de personas a getPeoplefromFilm
    peopleFromFilm = getPeopleFromFilm(people);
  }

  return (
    <Suspense fallback={<div>Cargando...</div>}>
      {' '}
      <div className='grid grid-cols-2 place-items-center'>
        <FilmsDetail />
        <div className='grid grid-cols-2 bg-slate-700 gap-2 overflow-auto w-full h-96 p-3 m-3 rounded-xl place-items-center'>
          <Suspense fallback={<div>Cargando...</div>}>
            {Array.isArray(peopleFromFilm) &&
              peopleFromFilm.length &&
              peopleFromFilm.map((person, index) => {
                return <CardPerson key={index} person={person} />;
              })}
          </Suspense>
        </div>
      </div>
    </Suspense>
  );
}
