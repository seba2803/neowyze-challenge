export const state = {
  Films: [],
  People: [],
};

export const getAllFilms = async () => {
  const result = await fetch('https://swapi.dev/api/films');
  const films = await result.json();
  //* formateo la informacion para sacar lo que voy a utilizar de la misma
  const formatFilms = films.results.map(
    ({ director, episode_id, title, characters }) => ({
      titulo: title,
      episodio: episode_id,
      director,
      personajes: characters,
    })
  );
  state.Films = [formatFilms];
};
