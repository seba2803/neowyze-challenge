import { getPeople, state } from '@/services/services';
import CardPerson from './components/people/CardPerson';
import { Suspense } from 'react';

export default async function PagePeople() {
  await getPeople();
  return (
    <div className='grid grid-cols-3 h-4/5 w-9/12 bg-slate-300 overflow-x-hidden'>
      <Suspense fallback={<div>Cargando personas...</div>}>
        {state.People.length &&
          state.People.map((person, index) => (
            <CardPerson key={index} person={person} index={index} />
          ))}
      </Suspense>
    </div>
  );
}
