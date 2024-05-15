'use client';
import { chargeStatePeople, getPeople, state } from '@/services/services';
import CardPerson from './components/people/CardPerson';
import { useEffect, useState } from 'react';
import LoadPeople from './components/carga/LoadPeople';

export default function PagePeople() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    if (!people.length) {
      (async () => {
        await getPeople();
      })().then(() => {
        chargeStatePeople();
        setPeople([...state.FilterPeople]);
      });
    }
  }, [getPeople, setPeople]);

  const handleFilterEyes = (event) => {
    if (event.target.value === 'todos') {
      chargeStatePeople();
      setPeople([...state.FilterPeople]);
      return;
    }

    setPeople([
      ...state.FilterPeople.filter(
        (person) => person.color_ojos === event.target.value
      ),
    ]);
  };

  const handleFilterGenre = (event) => {
    setPeople([
      ...state.FilterPeople.filter(
        (person) => person.genero === event.target.value
      ),
    ]);
  };

  const handleFilterAlphabet = (event) => {
    if (event.target.value === 'A-Z') {
      setPeople([
        ...state.FilterPeople.sort((a, b) => a.nombre.localeCompare(b.nombre)),
      ]);
      return;
    }
    if (event.target.value === 'Z-A')
      setPeople([
        ...state.FilterPeople.sort((a, b) => -a.nombre.localeCompare(b.nombre)),
      ]);
    return;
  };

  return (
    <div>
      {!people.length ? (
        <div className=' w-full px-14 flex place-items-center place-content-center'>
          <LoadPeople />
        </div>
      ) : (
        <div className='flex flex-col place-items-center'>
          <div className='flex flex-wrap w-4/5 justify-around items-center bg-slate-800 m-4 py-3 rounded-xl border-2 border-gray-500'>
            <select
              onChange={handleFilterEyes}
              className='text-black mx-2 w-28'
            >
              <option value={'todos'}>todos</option>
              <option value={'blue'}>blue</option>
              <option value={'yellow'}>yellow</option>
              <option value={'red'}>red</option>
              <option value={'brown'}>brown</option>
              <option value={'blue-gray'}>blue-gray</option>
              <option value={'black'}>black</option>
              <option value={'orange'}>orange</option>
              <option value={'hazel'}>hazel</option>
              <option value={'pink'}>pink</option>
              <option value={'red, blue'}>red and blue</option>
              <option value={'gold'}>gold</option>
              <option value={'green, yellow'}>green and yellow</option>
              <option value={'white'}>white</option>
            </select>
            <select
              onChange={handleFilterGenre}
              className='text-black mx-2 w-28'
            >
              <option value={'male'}>male</option>
              <option value={'female'}>female</option>
              <option value={'none'}>none</option>
              <option value={'hermaphrodite'}>hermaphrodite</option>
            </select>
            <select
              onChange={handleFilterAlphabet}
              className='text-black mx-2 w-28'
            >
              <option>sort</option>
              <option value={'A-Z'}>A-Z</option>
              <option value={'Z-A'}>Z-A</option>
            </select>
          </div>
          <div className='grid grid-cols-3 place-items-center gap-5 phone:grid-cols-1 tablet:grid-cols-2 h-96 w-4/5 m-5 p-1 bg-slate-900 rounded-2xl border-2 border-gray-500 overflow-y-scroll'>
            {people.map((person, index) => (
              <CardPerson key={index} person={person} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
