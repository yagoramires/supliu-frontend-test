import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getAllAlbums } from '../redux/actions';

import Album from '../components/Album';
import Search from '../components/Search';
import RemoveAlbum from '../components/RemoveAlbum';
import AddAlbum from '../components/AddAlbum';
import Pagination from '../components/Pagination';
import { RiAddFill } from 'react-icons/ri';

export default function Home() {
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.albums);

  const [removeAlbumModal, setRemoveAlbumModal] = useState({
    albumId: null,
    albumTitle: '',
    isOpen: false,
  });

  const [addAlbumModal, setAddAlbumModal] = useState(false);

  const handleOpenAddAlbumModal = () => {
    setAddAlbumModal(true);
  };

  useEffect(() => {
    dispatch(getAllAlbums());
  }, [dispatch]);

  return (
    <div
      className={`bg-[url(/background.png)] bg-no-repeat bg-cover min-h-screen w-full flex justify-center items-center`}
    >
      <div className='w-[90%] max-w-[800px] bg-[rgba(255,255,255,0.7)] shadow-md h-[90vh] md:h-[80vh] relative overflow-hidden flex flex-col justify-between'>
        <div>
          <div className='bg-white flex justify-between items-center p-2 md:p-4 lg:p-6 shadow-sm'>
            <Link to='/'>
              <img src='/logo.png' alt='logo' className='w-[120px] md:w-auto' />
            </Link>
            <h2 className='text-xl md:text-3xl text-zinc-500'>Discografia</h2>
          </div>

          <Search />

          <ul className='px-4 lg:px-6 max-h-[55vh] md:max-h-[50vh] lg:max-h-[45vh] overflow-y-auto'>
            {albums.length > 0 ? (
              albums.map((album) => (
                <Album
                  key={album.id}
                  data={album}
                  openRemoveModal={setRemoveAlbumModal}
                />
              ))
            ) : (
              <li>Nenhum álbum cadastrado.</li>
            )}
          </ul>
        </div>
        <Pagination />

        <button
          className='absolute text-sm md:text-base bottom-4 right-4 bg-blue-400 hover:bg-blue-500 transition-all text-white py-2 px-4 rounded-full flex items-center gap-2'
          onClick={handleOpenAddAlbumModal}
        >
          <RiAddFill className='text-base md:text-xl' />
          Novo Álbum
        </button>
      </div>
      {addAlbumModal && <AddAlbum closeModal={setAddAlbumModal} />}
      {removeAlbumModal.isOpen && (
        <RemoveAlbum
          albumData={removeAlbumModal}
          closeModal={setRemoveAlbumModal}
        />
      )}
    </div>
  );
}
