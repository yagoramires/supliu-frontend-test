import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../redux/actions';
import { useEffect, useState } from 'react';

export default function Pagination() {
  const [nextPageWhenCreateAlbum, setNextPageWhenCreateAlbum] = useState('');
  const page = useSelector((state) => state.current_page);
  const prevPage = useSelector((state) => state.prev_page_url);
  const nextPage = useSelector((state) => state.next_page_url);
  const totalAlbums = useSelector((state) => state.total);
  const actionType = useSelector((state) => state.type);
  const lastPage = useSelector((state) => state.last_page);

  const dispatch = useDispatch();

  const handleSelectPage = (URL) => {
    dispatch(changePage(URL));
  };

  useEffect(() => {
    if (totalAlbums % 10 === 0 && page > 1) {
      if (actionType === 'REMOVE_ALBUM') return handleSelectPage(prevPage);
    }

    if (totalAlbums % 10 === 1 && lastPage === page) {
      if (actionType === 'ADD_ALBUM') {
        setNextPageWhenCreateAlbum(page + 1);
        return handleSelectPage(
          `https://tiao.supliu.com.br/api/album?page=${nextPageWhenCreateAlbum}`,
        );
      }
    }
  }, [totalAlbums]);

  return (
    <div className='p-4 flex items-center justify-start md:justify-center gap-2 md:gap-4 '>
      {page > 1 && (
        <button
          className='border-2 border-zinc-800 w-8 text-center rounded-md text-zinc-800 font-bold hover:border-blue-500 hover:text-blue-500 transition-all'
          onClick={() => handleSelectPage(prevPage)}
        >
          {page - 1}
        </button>
      )}
      <p className='border-2 border-blue-500 w-8 text-center rounded-md text-blue-500 font-bold'>
        {page}
      </p>
      {totalAlbums % 10 > 0 && (nextPage || nextPageWhenCreateAlbum) && (
        <button
          className='border-2 border-zinc-800 w-8 text-center rounded-md text-zinc-800 font-bold hover:border-blue-500 hover:text-blue-500 transition-all'
          onClick={() => handleSelectPage(nextPage)}
        >
          {page + 1}
        </button>
      )}
    </div>
  );
}
