import PageFilmDetail from '@/pages/PageFilmDetail';
import { Suspense } from 'react';
import Link from 'next/link';

export default function PageDetail() {
  return (
    <div className='grid place-items-center'>
      <Suspense fallback={<div>Cargando detalle...</div>}>
        <Link href={'/films'}>
          <button>Regresar...</button>
        </Link>
        <PageFilmDetail />
      </Suspense>
    </div>
  );
}
