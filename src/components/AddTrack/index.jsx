/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { addTrackSchema } from './schema';

import { useDispatch } from 'react-redux';
import { createTrack } from '../../redux/actions';
import { RiCloseLine } from 'react-icons/ri';

export default function AddTrack({ closeAddModal, albumId }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(addTrackSchema),
  });

  const dispatch = useDispatch();

  const handleClose = () => {
    closeAddModal({
      albumId: null,
      isOpen: false,
    });
  };

  const submit = (formData) => {
    const trackData = { ...formData, album_id: albumId };
    dispatch(createTrack(trackData));
    reset();
    handleClose();
  };

  return (
    <div className='min-h-screen w-full flex justify-center items-center bg-[rgba(0,0,0,0.8)] absolute top-0 left-0 '>
      <div className='w-[90%] max-w-[600px] bg-white rounded-md p-8'>
        <div className='w-full flex justify-end'>
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
              htmlFor='title'
              className='text-sm w-full text-start text-zinc-500'
            >
              Título
            </label>
            <input
              name='title'
              type='text'
              {...register('title')}
              className='w-full bg-zinc-200 p-2 rounded-sm outline-none '
              placeholder='Digite o nome da faixa'
            />
            {errors.title && (
              <span className='text-sm text-red-500'>
                {errors.title.message}
              </span>
            )}
          </div>
          <div className='mb-2 w-full'>
            <label
              htmlFor='number'
              className='text-sm w-full text-start text-zinc-500'
            >
              Número
            </label>
            <input
              name='number'
              type='number'
              {...register('number', { valueAsNumber: true })}
              className='w-full bg-zinc-200 p-2 rounded-sm outline-none '
              placeholder='Digite o número da faixa'
            />
            {errors.number && (
              <span className='text-sm text-red-500'>
                {errors.number.message}
              </span>
            )}
          </div>
          <div className='mb-6 w-full'>
            <label
              htmlFor='duration'
              className='text-sm w-full text-start text-zinc-500'
            >
              Duração
            </label>
            <input
              name='duration'
              type='number'
              {...register('duration', { valueAsNumber: true })}
              className='w-full bg-zinc-200 p-2 rounded-sm outline-none'
              placeholder='Digite a duração da faixa (em segundos)'
            />
            {errors.duration && (
              <span className='text-sm text-red-500'>
                {errors.duration.message}
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
