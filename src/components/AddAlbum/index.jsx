/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { addAlbumSchema } from './schema';

import { useDispatch } from 'react-redux';
import { createAlbum } from '../../redux/actions';
import { RiCloseLine } from 'react-icons/ri';

export default function AddAlbum({ closeModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(addAlbumSchema),
  });

  const dispatch = useDispatch();

  const handleClose = () => {
    closeModal(false);
  };

  const submit = (formData) => {
    dispatch(createAlbum(formData));
    reset();
    handleClose();
  };

  return (
    <div className='min-h-screen w-full flex justify-center items-center bg-[rgba(0,0,0,0.8)] absolute top-0 left-0 '>
      <div className='w-[90%] max-w-[600px] bg-white rounded-md p-8'>
        <div className='w-full flex justify-between mb-2'>
          <p className='text-xl font-bold'>Adicionar Álbum</p>
          <button
            className='bg-red-400 text-white rounded-sm p-1 hover:bg-red-500 transition-all'
            onClick={handleClose}
          >
            <RiCloseLine className='text-xl' />
          </button>
        </div>
        <form
          onSubmit={handleSubmit(submit)}
          className='flex flex-col items-center justify-center '
        >
          <div className='mb-2 w-full'>
            <label
              htmlFor='name'
              className='text-sm w-full text-start text-zinc-500'
            >
              Nome
            </label>
            <input
              name='name'
              type='text'
              {...register('name')}
              className='w-full bg-zinc-200 p-2 rounded-sm outline-none '
              placeholder='Digite o nome do álbum'
            />
            {errors.name && (
              <span className='text-sm text-red-500'>
                {errors.name.message}
              </span>
            )}
          </div>
          <div className='mb-6 w-full'>
            <label
              htmlFor='year'
              className='text-sm w-full text-start text-zinc-500'
            >
              Ano
            </label>
            <input
              name='year'
              type='number'
              required
              {...register('year', { valueAsNumber: true })}
              className='w-full bg-zinc-200 p-2 rounded-sm outline-none '
              placeholder='Digite o ano de lançamento'
            />
            {errors.year && (
              <span className='text-sm text-red-500'>
                {errors.year.message}
              </span>
            )}
          </div>

          <input
            type='submit'
            value={'Cadastrar'}
            className='w-full bg-blue-400 hover:bg-blue-500 transition-all cursor-pointer  p-2 rounded-sm text-white font-bold'
          />
        </form>
      </div>
    </div>
  );
}
