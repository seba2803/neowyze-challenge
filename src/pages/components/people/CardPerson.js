'use client';

import Image from 'next/image';
import fotoPersonaje from '../../../../public/foto-personaje.jpg';
import { usePathname, useRouter } from 'next/navigation';
import { getPerson } from '@/services/services';

export default function CardPerson(props) {
  const PathName = usePathname();
  const router = useRouter();
  const invalidValues = ['unknown', 'n/a'];
  //* manejador del evento al clikear boton
  const handleClick = async () => {
    if (typeof window !== undefined) {
      window.sessionStorage.setItem('Person_id', props.person.id);
      await getPerson(props.person.id);
      router.push('/people/detail');
    }
  };

  return (
    <div className='flex flex-col place-items-center place-content-center bg-blue-900 w-60 h-full p-2 border-4 border-slate-800 rounded-xl text-wrap text-center'>
      <h2>Name: {props.person?.nombre}</h2>
      <Image
        src={fotoPersonaje}
        alt='foto del personaje'
        width={180}
        height={'auto'}
        className='rounded-xl my-2'
      />

      <button
        onClick={handleClick}
        className='bg-slate-800 border-none rounded-lg p-2 my-1 laptop:hover:bg-slate-900 desktop:hover:bg-slate-900 phone:active:bg-slate-900 tablet:active:bg-slate-900'
      >
        View More
      </button>

      {PathName === '/people' &&
        !invalidValues.includes(props.person.color_ojos) && (
          <h2>Eye color: {props.person.color_ojos}</h2>
        )}
      {PathName === '/people' &&
        !invalidValues.includes(props.person.genero) && (
          <h2>Gender: {props.person.genero}</h2>
        )}
    </div>
  );
}
