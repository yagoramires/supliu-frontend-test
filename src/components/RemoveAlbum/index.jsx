/* eslint-disable react/prop-types */

import { useDispatch } from 'react-redux';

export default function RemoveAlbum({ albumData, closeModal }) {
  const dispatch = useDispatch();

  const handleClose = () => {
    closeModal({
      albumId: null,
      albumTitle: '',
      isOpen: false,
    });
  };

  const handleConfirm = () => {
    // dispatch()
  };

  return (
    <div className='min-h-screen w-full flex justify-center items-center bg-[rgba(0,0,0,0.8)] absolute top-0 left-0 '>
      <div className='w-[90%] max-w-[400px] bg-white rounded-md p-8'>
        <h2 className='text-xl text-zinc-400'>
          Tem certeza que deseja apagar o album{' '}
          <span className='font-bold text-black'>{albumData.albumTitle}</span>?
        </h2>

        <div className='w-full flex justify-center gap-4 mt-4'>
          <button
            className='bg-blue-400 text-white rounded-sm p-2 hover:bg-blue-500 transition-all w-full font-bold'
            onClick={handleConfirm}
          >
            Sim, apagar
          </button>
          <button
            className='bg-red-400 text-white rounded-sm p-2 hover:bg-red-500 transition-all w-full font-bold'
            onClick={handleClose}
          >
            Não, cancelar
          </button>
        </div>
      </div>
      ;
    </div>
  );
}
