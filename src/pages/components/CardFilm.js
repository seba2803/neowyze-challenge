'use client';
import Image from 'next/image';
import fotoFilm from '../../../public/foto-film.jpg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function CardFilm() {
  const PathName = usePathname();
  return (
    <div className='flex flex-col place-items-center bg-slate-800 w-52 h-fit p-2 border-4 border-slate-700 rounded-xl text-wrap'>
      {PathName === '/films' ? (
        <Link href={'/'}>Name: el caballero negro</Link>
      ) : (
        <h2>Name: el caballero</h2>
      )}
      <Image
        src={fotoFilm}
        alt='foto de peliula'
        width={200}
        height={100}
        className='m-1 rounded-xl'
      />
      <h2>Episode Number: 4</h2>
    </div>
  );
}
