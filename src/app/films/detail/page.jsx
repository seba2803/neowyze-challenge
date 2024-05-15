import PageFilmDetail from '@/pages/PageFilmDetail';
import Link from 'next/link';

export default function PageDetail() {
  return (
    <div className=''>
      <Link href={'/films'} className='bg-stone-400 p-2 m-3 border rounded-xl'>
        <button>Volver</button>
      </Link>
      <PageFilmDetail />
    </div>
  );
}
