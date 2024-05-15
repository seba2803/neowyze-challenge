'use client';
import Image from 'next/image';
import fotoPersona from '../../../../public/foto-personaje.jpg';
import { getPerson, state } from '@/services/services';
import { useEffect, useState } from 'react';
import LoadPersonDetail from '../carga/LoadPersonDetail';

export default function PersonDetail() {
  const [person, setPerson] = useState({});
  const invalidValues = ['unknown', 'n/a'];
  useEffect(() => {
    if (typeof window !== undefined) {
      (async () => {
        if (!state.Person.nombre) {
          const id = window.sessionStorage.getItem('Person_id');
          await getPerson(id);
        }
      })().then(() => setPerson({ ...state.Person }));
    }
    return () => {
      setPerson({});
    };
  }, [getPerson]);

  if (!person.nombre) {
    return <LoadPersonDetail />;
  }

  return (
    <div className='grid grid-cols-2 w-full h-full m-5 phone:grid-cols-1 place-items-center rounded-2xl border-2 border-slate-500 bg-slate-900'>
      <Image
        src={fotoPersona}
        alt='foto de personaje'
        width={200}
        height={'auto'}
        className='rounded-xl my-4'
      />
      <ul className='text-lg font-semibold border-2 border-slate-400 rounded-3xl p-5 my-4 laptop:w-72 desktop:w-80 phone:w-fit'>
        <li>Name: {person.nombre}</li>
        {!invalidValues.includes(person.color_ojos) && (
          <li>Eye color: {person.color_ojos}</li>
        )}
        {!invalidValues.includes(person.cumpleano) && (
          <li>Birth year: {person.cumpleano}</li>
        )}
        {!invalidValues.includes(person.color_pelo) && (
          <li>Hair color: {person.color_pelo}</li>
        )}
        {!invalidValues.includes(person.altura) && (
          <li>Height: {person.altura}</li>
        )}
        {!invalidValues.includes(person.color_piel) && (
          <li>Skin color: {person.color_piel}</li>
        )}
        {!invalidValues.includes(person.masa) && <li>Mass: {person.masa}</li>}
      </ul>
    </div>
  );
}
