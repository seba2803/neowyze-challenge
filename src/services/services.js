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

//* obtiene todas las personas
export const getPeople = async () => {
  try {
    //* arreglo de promesas sin resolver
    const promisePeople = [];
    for (let index = 1; index < 10; index++) {
      //* pusheo en promisePeople las promesas sin resolver que hacen el fetching de datos a ruta people
      promisePeople.push(
        fetchingData(`https://swapi.dev/api/people/?page=${index}`)
      );
    }
    //* resuleve todas las promesas pendientes de promisePeople usando Promise all
    Promise.all(promisePeople).then((value) => {
      //? cargo todos los datos en el estado People
      state.People = value.flat();
    });
  } catch (error) {
    console.log({ error: error.message });
  }
};

//* funcion que hace fetching de ruta people
async function fetchingData(url) {
  const result = await fetch(url);
  const data = await result.json();
  //* formateo la data para un mejor uso de la información
  const formatData = data.results.map(
    ({
      name,
      height,
      mass,
      hair_color,
      skin_color,
      eye_color,
      birth_year,
      gender,
    }) => ({
      nombre: name,
      altura: height,
      masa: mass,
      color_pelo: hair_color,
      color_piel: skin_color,
      color_ojos: eye_color,
      compleano: birth_year,
      genero: gender,
    })
  );
  return formatData;
}

//* otiene la persona para verla a detalle
export const getPerson = async () => {
  try {
  } catch (error) {}
};
