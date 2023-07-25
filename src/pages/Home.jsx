import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAlbums } from '../redux/actions';
import Album from '../components/Album';

export default function Home() {
  const dispatch = useDispatch();

  const albums = useSelector((state) => state.albums);

  console.log(albums);

  useEffect(() => {
    dispatch(getAllAlbums());
  }, []);

  return (
    <div
      className={`bg-[url(/background.png)] bg-no-repeat bg-cover min-h-screen w-full flex justify-center items-center`}
    >
      <div className='w-[90%] max-w-[800px] bg-[rgba(255,255,255,0.7)]'>
        <div className='bg-white flex justify-between items-center p-4'>
          <img src='/logo.png' alt='' />
          <h2 className='text-3xl text-zinc-500'>Discografia</h2>
        </div>

        <div>search</div>

        {albums.length > 0 ? (
          albums.map((album) => (
            <ul key={album.id} className='p-4'>
              <Album data={album} />
            </ul>
          ))
        ) : (
          <p>Nenhum álbum cadastrado.</p>
        )}
      </div>
    </div>
  );
}
