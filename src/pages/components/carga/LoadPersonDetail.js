const LoadPersonDetail = () => {
  return (
    <div className='grid grid-cols-2 w-full h-full m-5 phone:grid-cols-1 place-items-center rounded-2xl border-2 border-slate-500 bg-slate-900'>
      <div className='w-52 h-64 bg-stone-500 rounded-xl my-4 animate-pulse'></div>
      <div className='flex flex-col aspect-square border-2 border-slate-400 rounded-3xl p-5 my-4 laptop:w-72 desktop:w-80 phone:w-fit h-56'>
        <span className='w-9/12 animate-pulse bg-stone-500 h-10 my-2 rounded'></span>
        <span className='w-9/12 animate-pulse bg-stone-500 h-10 my-2 rounded'></span>
        <span className='w-9/12 animate-pulse bg-stone-500 h-10 my-2 rounded'></span>
        <span className='w-9/12 animate-pulse bg-stone-500 h-10 my-2 rounded'></span>
        <span className='w-9/12 animate-pulse bg-stone-500 h-10 my-2 rounded'></span>
        <span className='w-9/12 animate-pulse bg-stone-500 h-10 my-2 rounded'></span>
      </div>
    </div>
  );
};
export default LoadPersonDetail;
