import React, { useContext } from 'react';
import { Songs } from '../Context';

function DetailSong() {
    const {song}= useContext(Songs)
    return (
        <>
        <div className='lg:col-span-1 md:m-auto lg:m-auto text-center'>
            <h2 className='text-cyan-500 font-bold lg:text-xl'>Now playing</h2>
            <h2 className='text-neutral-400 text-2xl lg:text-4xl'>{song.name}</h2>
            <div className='w-[240px] m-auto lg:mt-10 mt-5'>
                <img className='w-full p-5 md:p-0 lg:p-0 rounded-full' src={song.links.images[0].url} alt='avatar' />
            </div>
            <div className='flex justify-center items-center mt-5 lg:mt-7'>
            <img className='p-0 w-[50px] md:w-[80px] rounded-full' src={song.links.images[1].url} alt='avatar' />
            <span className='text-base text-white ml-5 md:text-xl'>{song.author}</span>
            </div>
        </div>
        </>
    );
}

export default DetailSong;