import Image from 'next/image';
import logoStarWars from '../../public/star-wars-logo.jpg';
import Link from 'next/link';

export default function Landing() {
  return (
    <div className='grid place-items-center'>
      {/*se utiliza el componente Image para un mejor renderizado de imagen*/}
      <Image src={logoStarWars} alt='logo star-wars' width={500} height={300} />
      <div className='text-center flex flex-wrap flex-col place-items-center border-2 border-white rounded-lg w-4/5 phone:w-full tablet:w-3/4 h-24 m-8 bg-slate-900'>
        <h2 className='text-xl mt-1'>
          View about to <i>films</i>
        </h2>
        {/*boton que redirige a ruta films y a su vez evita que la pagina se recargue al viajar por distintas rutas*/}
        <Link
          href={'/films'}
          className='border-2 border-white rounded-md px-3 hover:bg-stone-700 transition-all mt-5 text-lg w-3/5'
        >
          <button>
            <strong>Here</strong>
          </button>
        </Link>
      </div>
      <div className='text-center flex flex-wrap flex-col place-items-center border-2 border-white rounded-lg w-4/5 phone:w-full tablet:w-3/4 h-24 m-8 bg-slate-900'>
        <h2 className='text-xl mt-1'>
          View about to <i>people</i>
        </h2>
        {/*boton que redirige a ruta people y a su vez evita que la pagina se recargue al viajar por distintas rutas*/}
        <Link
          href={'/people'}
          className='border-2 border-white rounded-md px-3 hover:bg-stone-700 transition-all mt-5 text-lg w-3/5'
        >
          <button>
            <strong>Here</strong>
          </button>
        </Link>
      </div>
    </div>
  );
}
