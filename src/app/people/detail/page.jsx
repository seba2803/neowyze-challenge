import PagePersonDetail from '@/pages/PagePersonDetail';
import { Suspense } from 'react';
import Link from 'next/link';

export default function PersonDetail() {
  return (
    <div>
      <Link href={'/people'} className='bg-stone-400 p-2 m-3 border rounded-xl'>
        <button> Volver</button>
      </Link>{' '}
      <div className='flex place-content-center my-8'>
        <PagePersonDetail />
      </div>
    </div>
  );
}
