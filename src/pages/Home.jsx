import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAlbums } from '../redux/actions';

import Album from '../components/Album';
import Search from '../components/Search';
import AddTrack from '../components/AddTrack';

export default function Home() {
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.albums);

  const [addModal, setAddModal] = useState({
    albumId: null,
    isOpen: false,
  });

  useEffect(() => {
    dispatch(getAllAlbums());
  }, []);

  return (
    <div
      className={`bg-[url(/background.png)] bg-no-repeat bg-cover min-h-screen w-full flex justify-center items-center`}
    >
      <div className='w-[90%] max-w-[800px] bg-[rgba(255,255,255,0.7)] shadow-md min-h-[80vh]'>
        <div className='bg-white flex justify-between items-center p-4 lg:p-6 shadow-sm'>
          <img src='/logo.png' alt='' />
          <h2 className='text-3xl text-zinc-500'>Discografia</h2>
        </div>

        <Search />

        <ul className='px-4 lg:px-6'>
          {albums.length > 0 ? (
            albums.map((album) => (
              <Album key={album.id} data={album} openAddModal={setAddModal} />
            ))
          ) : (
            <li>Nenhum álbum cadastrado.</li>
          )}
        </ul>

        {addModal.isOpen && (
          <AddTrack albumId={addModal.albumId} closeAddModal={setAddModal} />
        )}
      </div>
    </div>
  );
}
