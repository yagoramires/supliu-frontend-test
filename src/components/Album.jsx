/* eslint-disable react/prop-types */
export default function Album({ data }) {
  return (
    <li>
      <h2 className='font-bold mb-2'> Álbum: {`${data.name}, ${data.year}`}</h2>
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
