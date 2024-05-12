'use client';
import Image from 'next/image';
import fotoFilm from '../../../../public/foto-film.jpg';
import { usePathname } from 'next/navigation';
import { getFilm } from '@/services/services';
import { useRouter } from 'next/navigation';

export default function CardFilm(props) {
  //? extraigo la ruta en la que se encuentra el cliente
  const PathName = usePathname();
  const router = useRouter();

  const handleClick = () => {
    //*ejecuto la peticion para tener un film en concreto
    getFilm(props.Id + 1);
    //* guardo el id del film en session storage para poder obtenerlo mas adelante
    window.sessionStorage.setItem('Id', props.Id + 1);
    //? espero un tiempo a que se haga la peticion correctamente y luego se redirecciona
    setTimeout(() => {
      router.push('/films/detail');
    }, 500);
  };

  return (
    <div className='flex flex-col place-items-center place-content-center bg-slate-700 w-60 h-full p-2 border-4 border-slate-500 rounded-xl text-wrap text-center'>
      <h2>Name: {props.film.titulo}</h2>
      <Image
        src={fotoFilm}
        alt='foto de peliula'
        width={180}
        height={'auto'}
        priority={true}
        className='rounded-xl my-2'
      />
      <h2>Episode Number: {props.film.episodio}</h2>
      {/* si el usuario está en la ruta films, va aparecer el link para ir al detalle de la pelicula */}
      {PathName === '/films' && (
        <button
          className='bg-slate-800 border-none rounded-lg p-2 my-1 laptop:hover:bg-slate-900 desktop:hover:bg-slate-900 phone:active:bg-slate-900 tablet:active:bg-slate-900'
          onClick={() => handleClick()}
        >
          View More
        </button>
      )}
      {/*si existe la propiedad director, que se muestren */}
      {props.film.director && PathName === '/films/detail' && (
        <h2>Director: {props.film.director}</h2>
      )}
    </div>
  );
}
