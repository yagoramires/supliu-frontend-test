/* eslint-disable react/prop-types */
import { RiAddFill, RiCloseLine } from 'react-icons/ri';

export default function Album({ data, openAddModal, openRemoveModal }) {
  const handleOpenAddModal = () => {
    openAddModal({
      albumId: data.id,
      isOpen: true,
    });
  };
  const handleOpenRemoveModal = () => {
    openRemoveModal({
      albumId: data.id,
      albumTitle: data.name,
      isOpen: true,
    });
  };

  return (
    <li>
      <div className='flex items-center justify-between mb-2'>
        <h2 className='font-bold '>Álbum: {`${data.name}, ${data.year}`}</h2>
        <div className='flex justify-center items-center gap-2'>
          <button
            className='bg-blue-400 text-white rounded-sm p-1 hover:bg-blue-500 transition-all'
            onClick={handleOpenAddModal}
          >
            <RiAddFill className='text-xl' />
          </button>
          <button
            className='bg-red-400 text-white rounded-sm p-1 hover:bg-red-500 transition-all'
            onClick={handleOpenRemoveModal}
          >
            <RiCloseLine className='text-xl' />
          </button>
        </div>
      </div>
      <div className='flex items-center justify-center text-zinc-700 font-medium mb-1'>
        <h3 className='w-[15%] lg:w-[10%]'>Nº</h3>
        <h3 className='flex-1'>Faixa</h3>
        <h3 className='w-[15%] lg:w-[10%]'>Duração</h3>
      </div>

      <ul>
        {data.tracks.length > 0 ? (
          data.tracks.map((track) => (
            <li
              key={track.id}
              className='flex items-center justify-center text-zinc-700 font-medium mb-1'
            >
              <p className='w-[15%] lg:w-[10%] '>{track.number}</p>
              <p className='flex-1'>{track.title}</p>
              <p className='w-[15%] lg:w-[10%]'>{track.duration}</p>
            </li>
          ))
        ) : (
          <li>Nenhuma música cadastrada.</li>
        )}
      </ul>
    </li>
  );
}
