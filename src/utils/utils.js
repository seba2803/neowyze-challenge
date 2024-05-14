import { state } from '@/services/services';
//? extrae todas las personas que aparecen en el Film
export function getPeopleFromFilm(people) {
  //* si en el estado Film posee la propiedad personajes(un Array) que lo mapee
  if (state.Film.personajes) {
    //* extraigo los indices de las url de los personajes
    const indexes = state.Film.personajes.map((url) => {
      //* parseo a entero el resultado para tener indices enteros
      //* a la url la convierto en un array de todos los caracteres que posee la url
      //* filtro de ese array todos los numeros(indices)
      return parseInt(
        url
          .split('')
          .filter((l) => l > 0 || l < 90)
          .join('')
      );
    });
    const peopleFromFilm = [];
    //* mientras el array de indices tenga elementos
    //* voy a llenar a peopleFromFilm de todos los objetos que hay en el array people
    //* que concuerden con el indice que se extrajo de las url
    while (indexes.length) {
      peopleFromFilm.push(people[indexes.pop()]);
    }
    return peopleFromFilm;
  }
}
