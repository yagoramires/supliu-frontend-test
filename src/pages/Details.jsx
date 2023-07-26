import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { deleteTrack } from '../redux/actions';

import { IoIosArrowBack } from 'react-icons/io';
import { RiCloseLine } from 'react-icons/ri';

export default function Details() {
  const details = useSelector((state) => state.selectedAlbum);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBackPage = () => {
    navigate(-1);
  };

  const handleDeleteTrack = (id) => {
    dispatch(deleteTrack(id));
  };

  return (
    <div
      className={`bg-[url(/background.png)] bg-no-repeat bg-cover min-h-screen w-full flex justify-center items-center`}
    >
      <div className='w-[90%] max-w-[800px] bg-[rgba(255,255,255,0.7)] shadow-md h-[80vh] overflow-hidden p-4'>
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

              <ul>
                {details.tracks.length > 0 &&
                  details.tracks.map((track) => (
                    <li
                      key={track.id}
                      className='w-full flex items-center justify-center mb-2'
                    >
                      <p className='w-[15%]'>{track.number}</p>
                      <p className='flex-1'>{track.title}</p>
                      <p className='w-[15%]'>{track.duration}</p>
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
        </div>
      </div>
    </div>
  );
}
