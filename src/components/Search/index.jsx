import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { searchSchema } from './schema';

import { useDispatch } from 'react-redux';
import { getAllAlbums, searchAlbums } from '../../redux/actions';

export default function Search() {
  const [search, setSearch] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(searchSchema),
  });

  const dispatch = useDispatch();

  const submit = (formData) => {
    dispatch(searchAlbums(formData.search));
    setSearch(true);
    reset();
  };

  const handleClearSearch = () => {
    dispatch(getAllAlbums());
    setSearch(false);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)} className='p-2 md:p-4 lg:p-6 mb-2'>
      <label htmlFor='search' className='text-sm text-zinc-500'>
        Digite uma palavra chave
      </label>
      <div className='flex justify-center items-center gap-2 lg:gap-4 mt-1'>
        <input
          name='search'
          type='text'
          {...register('search')}
          className='flex-1 rounded-full p-2 px-4 outline-none shadow-sm'
          placeholder='Pesquise aqui ...'
        />
        <input
          type='submit'
          value={'Procurar'}
          className='bg-blue-400 hover:bg-blue-500 transition-all text-white rounded-full py-2 px-4 lg:px-12 cursor-pointer shadow-sm'
        />
      </div>
      {errors.search && (
        <span className='text-sm text-red-500'>{errors.search.message}</span>
      )}
      {search && (
        <button
          onClick={handleClearSearch}
          className='w-full text-center text-sm text-zinc-400 mt-2'
        >
          Limpar busca
        </button>
      )}
    </form>
  );
}
