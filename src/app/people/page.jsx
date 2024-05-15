import PagePeople from '@/pages/PagePeople';
import Link from 'next/link';
import { Suspense } from 'react';
export default function People() {
  return (
    <div>
      <Link href={'/'} className='bg-stone-400 p-2 m-3 border rounded-xl'>
        <button>Volver</button>
      </Link>
      <PagePeople />
    </div>
  );
}
