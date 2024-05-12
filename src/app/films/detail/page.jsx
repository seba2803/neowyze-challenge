import PageFilmDetail from '@/pages/PageFilmDetail';
import { Suspense } from 'react';
import Link from 'next/link';

export default function PageDetail() {
  return (
    <Suspense fallback={<div>Cargando detalle...</div>}>
      <Link href={'/films'}>
        <button>Regresar...</button>
      </Link>
      <PageFilmDetail />
    </Suspense>
  );
}
