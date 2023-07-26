import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../redux/actions';

export default function Pagination() {
  const page = useSelector((state) => state.current_page);
  const lastPage = useSelector((state) => state.prev_page_url);
  const nextPage = useSelector((state) => state.next_page_url);

  const dispatch = useDispatch();

  const handleSelectPage = (URL) => {
    dispatch(changePage(URL));
  };

  return (
    <div className='p-4 flex items-center justify-start md:justify-center gap-2 md:gap-4 '>
      {page > 1 && (
        <button
          className='border-2 border-zinc-800 w-8 text-center rounded-md text-zinc-800 font-bold hover:border-blue-500 hover:text-blue-500 transition-all'
          onClick={() => handleSelectPage(lastPage)}
        >
          {page - 1}
        </button>
      )}
      <p className='border-2 border-blue-500 w-8 text-center rounded-md text-blue-500 font-bold'>
        {page}
      </p>
      {nextPage && (
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
