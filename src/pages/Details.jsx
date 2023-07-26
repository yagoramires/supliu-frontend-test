import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { deleteTrack } from '../redux/actions';

import { IoIosArrowBack } from 'react-icons/io';
import { RiAddFill, RiCloseLine } from 'react-icons/ri';
import { useState } from 'react';
import AddTrack from '../components/AddTrack';
import useConvert from '../hooks/useConvertTime';

export default function Details() {
  const details = useSelector((state) => state.selectedAlbum);

  const [addTrackModal, setAddTrackModal] = useState({
    albumId: null,
    isOpen: false,
  });

  const { secondToMinutes } = useConvert();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBackPage = () => {
    navigate(-1);
  };

  const handleOpenAddModal = () => {
    setAddTrackModal({
      albumId: details.id,
      isOpen: true,
    });
  };

  const handleDeleteTrack = (id) => {
    dispatch(deleteTrack(id));
  };

  return (
    <div
      className={`bg-[url(/background.png)] bg-no-repeat bg-cover min-h-screen w-full flex justify-center items-center`}
    >
      <div className='w-[90%] max-w-[800px] bg-[rgba(255,255,255,0.7)] shadow-md h-[80vh] overflow-hidden p-4 relative'>
        <div className=''>
          <button
            onClick={handleBackPage}
            className='flex items-center justify-center gap-1 font-xl font-medium  hover:text-blue-400 transition-all'
          >
            <IoIosArrowBack />
            Voltar
          </button>

          {details ? (
            <>
              <h2 className='text-2xl font-bold mt-4'>{details.name}</h2>
              <h3 className='text-md font-semibold mb-4 italic'>
                {details.year}
              </h3>

              {details?.tracks?.length > 0 && (
                <div className='flex items-center justify-center text-zinc-700 font-medium mb-1'>
                  <h3 className='w-[15%] lg:w-[10%]'>Nº</h3>
                  <h3 className='flex-1'>Faixa</h3>
                  <h3 className='w-[20%] lg:w-[10%]'>Duração</h3>
                </div>
              )}

              <ul>
                {details?.tracks?.length > 0 &&
                  details?.tracks?.map((track) => (
                    <li
                      key={track.id}
                      className='w-full flex items-center justify-center mb-2'
                    >
                      <p className='w-[15%] lg:w-[10%]'>{track.number}</p>
                      <p className='flex-1'>{track.title}</p>
                      <p className='w-[20%] lg:w-[10%]'>
                        {secondToMinutes(Number(track.duration))}
                      </p>
                      <button
                        className='text-white bg-red-400 hover:bg-red-500 rounded-full'
                        onClick={() => handleDeleteTrack(track.id)}
                      >
                        <RiCloseLine />
                      </button>
                    </li>
                  ))}
              </ul>
            </>
          ) : (
            <div className='w-full flex justify-center items-center h-96'>
              <h3 className='font-medium text-2xl'>Nenhum álbum encontrado.</h3>
            </div>
          )}

          <button
            className='absolute text-sm md:text-base bottom-4 right-4 bg-blue-400 hover:bg-blue-500 transition-all text-white py-2 px-4 rounded-full flex items-center gap-2'
            onClick={handleOpenAddModal}
          >
            <RiAddFill className='text-base md:text-xl' />
            Adicionar Música
          </button>
        </div>
        {addTrackModal.isOpen && (
          <AddTrack
            albumId={addTrackModal.albumId}
            closeAddModal={setAddTrackModal}
          />
        )}
      </div>
    </div>
  );
}
