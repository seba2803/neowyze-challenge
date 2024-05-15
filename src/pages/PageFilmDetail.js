'use client';
import { Suspense } from 'react';
import FilmsDetail from './components/films/FilmsDetail';
import CardPerson from './components/people/CardPerson';
import { getPeopleFromFilm } from '@/utils/utils';
import { useEffect, useState } from 'react';
import { getFilm, state } from '@/services/services';
import LoadPeople from './components/carga/LoadPeople';
import LoadCardFilm from './components/carga/LoadCardFilm';

export default function PageFilmDetail() {
  const [peopleFilms, setPeopleFIlms] = useState([]);
  let peopleFromFilm;
  useEffect(() => {
    (async () => {
      //* si window existe en el entorno entonces que acceda a él
      if (typeof window !== undefined) {
        //* obtengo lo que hay en localStorage
        const storage = window.localStorage.getItem('People');
        //* parseo a JSON el storage
        const people = await JSON.parse(storage);
        //* para que la funcion getPeopleFromFilm funcione correctamente
        const id = window.sessionStorage.getItem('Id');
        await getFilm(id);
        //* le paso el array de personas a getPeoplefromFilm
        peopleFromFilm = getPeopleFromFilm(people);
        return peopleFromFilm;
      }
    })().then((value) => {
      setPeopleFIlms(value);
    });
  }, [setPeopleFIlms]);

  return (
    <div className='grid grid-cols-2 gap-x-3 phone:grid-cols-1 tablet:grid-cols-2 place-items-center place-content-center bg-slate-900 border-2 border-slate-400 rounded-2xl p-2 mt-12 mx-5'>
      <FilmsDetail />

      <div className='grid grid-flow-col-dense place-items-center  phone:grid-cols-1 tablet:grid-cols-1'>
        {Array.isArray(peopleFilms) && peopleFilms.length ? (
          <div className='grid tablet:grid-cols-1 phone:grid-cols-1 laptop:grid-cols-2 bg-slate-700 gap-4 overflow-y-scroll w-full h-96 p-3 m-3 rounded-2xl place-items-center'>
            {peopleFilms.map((person, index) => {
              return <CardPerson key={index} person={person} />;
            })}
          </div>
        ) : (
          <div className='grid tablet:grid-cols-1 phone:grid-cols-1 grid-cols-2 bg-slate-700 gap-4 overflow-y-scroll w-full h-96 p-3 m-3 rounded-2xl place-items-center'>
            <LoadCardFilm />
            <LoadCardFilm />
            <LoadCardFilm />
            <LoadCardFilm />
            <LoadCardFilm />
            <LoadCardFilm />
          </div>
        )}
      </div>
    </div>
  );
}
