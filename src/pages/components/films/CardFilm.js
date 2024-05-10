'use client';
import Image from 'next/image';
import fotoFilm from '../../../../public/foto-film.jpg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function CardFilm(props) {
  //? extraigo la ruta en la que se encuentra el cliente
  const PathName = usePathname();
  return (
    <div className='flex flex-col place-items-center bg-slate-800 w-52 h-fit p-2 border-4 border-slate-700 rounded-xl text-wrap'>
      <h2>Name: {props.film.titulo}</h2>
      <Image
        src={fotoFilm}
        alt='foto de peliula'
        width={200}
        height={100}
        className='m-1 rounded-xl'
      />
      <h2>Episode Number: {props.film.episodio}</h2>
      {/* si el usuario está en la ruta films, va aparecer el link para ir al detalle de la pelicula */}
      {PathName === '/films' && <Link href={'/films/detail'}>View More</Link>}
      {/* si existen las propiedades director y personajes que vienen por props, que se muestren */}
      {props.film.director && PathName === '/films/detail' && (
        <h2>Director: {props.film.director}</h2>
      )}
      {props.film.personajes && PathName === '/films/detail' && (
        <h2>personajes...</h2>
      )}
    </div>
  );
}
