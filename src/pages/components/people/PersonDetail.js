'use client';
import Image from 'next/image';
import fotoPersona from '../../../../public/foto-personaje.jpg';
import { getPerson, state } from '@/services/services';
import { Suspense, useEffect, useState } from 'react';

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
    </Suspense>
  );
}
