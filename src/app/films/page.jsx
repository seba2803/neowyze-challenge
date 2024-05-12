import PageFilms from '@/pages/PageFilms';
import { Suspense } from 'react';
import Link from 'next/link';

export default function Films() {
  return (
    <Suspense fallback={<div>Cargando pagina...</div>}>
      <Link href={'/'}>
        <button>Volver</button>
      </Link>
      <PageFilms />
    </Suspense>
  );
}
