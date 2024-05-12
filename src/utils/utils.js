import { state } from '@/services/services';

export function showState(people) {
  if (state.Film.personajes) {
    const indexes = state.Film.personajes.map((url) => {
      return parseInt(
        url
          .split('')
          .filter((l) => l > 0 || l < 90)
          .join('')
      );
    });
    console.log('indices', indexes);
    console.log('local storage', people);
    const peopleFromFilm = [];
    while (indexes.length) {
      peopleFromFilm.push(people[indexes.pop()]);
    }
    console.log('personas de cada film', peopleFromFilm);
    return peopleFromFilm;
  }
}
