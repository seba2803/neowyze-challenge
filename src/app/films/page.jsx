import PageFilms from '@/pages/PageFilms';
import { Suspense } from 'react';
import Link from 'next/link';
import LoadFilms from '@/pages/components/carga/LoadFilm';

export default function Films() {
  return (
    <Suspense fallback={<LoadFilms />}>
      <Link href={'/'} className='bg-stone-400 p-2 m-3 border rounded-xl'>
        <button>Volver</button>
      </Link>
      <PageFilms />
    </Suspense>
  );
}
