//* estados globales para usar en la aplicacion
export const state = {
  Films: [],
  Film: {},
  People: [],
  Person: {},
};

//* obtiene todos los films
export const getAllFilms = async () => {
  try {
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
    //? guardo la informacion en el estado Films
    state.Films = [formatFilms];
  } catch (error) {
    console.log({ error: error.message });
  }
};

//* otiene el film para verlo a detalle
export const getFilm = async (id) => {
  try {
    const result = await fetch(`https://swapi.dev/api/films/${id}`);
    const film = await result.json();
    //* formateo la informacion para un mejor uso
    const {
      director,
      episode_id: episodio,
      title: titulo,
      characters: personajes,
    } = film;
    //?guardo la informacion en el estado Film
    state.Film = { director, episodio, titulo, personajes };
  } catch (error) {
    console.log({ error: error.message });
  }
};

//* limpia el estado Film
export const clearFilm = () => {
  state.Film = {};
};

//* obtiene todas las personas
export const getPeople = async () => {
  try {
  } catch (error) {}
};

//* otiene la persona para verla a detalle
export const getPerson = async () => {
  try {
  } catch (error) {}
};

//* limpia el estado Person
