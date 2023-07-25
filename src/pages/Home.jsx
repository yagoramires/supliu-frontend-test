import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAlbums } from '../redux/actions';

export default function Home() {
  const dispatch = useDispatch();

  const albums = useSelector((state) => state.albums);

  console.log(albums);

  useEffect(() => {
    dispatch(getAllAlbums());
  }, []);

  return <div className='mainContainer'>Home</div>;
}
