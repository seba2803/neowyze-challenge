'use client';
import Image from 'next/image';
import fotoPersona from '../../../../public/foto-personaje.jpg';
import { getPerson, state } from '@/services/services';
import { Suspense, useEffect, useState } from 'react';

export default function PersonDetail() {
  const [person, setPerson] = useState({});
  useEffect(() => {
    if (typeof window !== undefined) {
      (async () => {
        if (!state.Person.nombre) {
          const id = window.sessionStorage.getItem('Person_id');
          console.log('id', id);
          await getPerson(id);
        }
      })().then(() => setPerson({ ...state.Person }));
    }
    return () => {
      setPerson({});
    };
  }, [getPerson]);
  console.log(person);

  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <div>
        <Image
          src={fotoPersona}
          alt='foto de personaje'
          width={200}
          height={'auto'}
        />
        <ul>
          <li>Name: {person.nombre}</li>
          <li>Eye color: {person.color_ojos}</li>
          <li>Birth year: {person.cumpleano}</li>
          <li>Hair color: {person.color_pelo}</li>
          <li>Height: {person.altura}</li>
          <li>Skin color: {person.color_piel}</li>
          <li>Mass: {person.masa}</li>
        </ul>
      </div>
    </Suspense>
  );
}
