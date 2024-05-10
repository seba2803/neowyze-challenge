'use client';
import Image from 'next/image';
import fotoFilm from '../../../../public/foto-film.jpg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function CardFilm(props) {
  //? extraigo la ruta en la que se encuentra el cliente
  const PathName = usePathname();
  return (
    <div className='flex flex-col place-items-center place-content-center bg-slate-700 w-60 h-full p-2 border-4 border-slate-500 rounded-xl text-wrap text-center'>
      <h2>Name: {props.film.titulo}</h2>
      <Image
        src={fotoFilm}
        alt='foto de peliula'
        width={180}
        height={80}
        className='rounded-xl my-2'
      />
      <h2>Episode Number: {props.film.episodio}</h2>
      {/* si el usuario está en la ruta films, va aparecer el link para ir al detalle de la pelicula */}
      {PathName === '/films' && (
        <Link href={'/films/detail'}>
          <button className='bg-slate-800 border-none rounded-lg p-2 my-1 laptop:hover:bg-slate-900 desktop:hover:bg-slate-900 phone:active:bg-slate-900 tablet:active:bg-slate-900'>
            View More
          </button>
        </Link>
      )}
      {/*si existen las propiedades director y personajes que vienen por props, que se muestren */}
      {props.film.director && PathName === '/films/detail' && (
        <h2>Director: {props.film.director}</h2>
      )}
      {props.film.personajes && PathName === '/films/detail' && (
        <h2>personajes...</h2>
      )}
    </div>
  );
}
