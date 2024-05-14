import PagePeople from '@/pages/PagePeople';
import { Suspense } from 'react';
export default function People() {
  return (
    <Suspense fallback={<div>Cargando</div>}>
      <PagePeople />
    </Suspense>
  );
}
