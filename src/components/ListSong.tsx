import React, { useContext, useEffect, useState } from 'react';
import {AiOutlineDownload} from 'react-icons/ai'
import { Songs } from '../Context';
function ListSong() {
    const { DataSongs,handleSetSong,song } = useContext(Songs);
    const [idSong, setIdSong] = useState(0);
    const handlePlaySong = (idSong:any) => {
        setIdSong(idSong)
        handleSetSong(idSong)
    };
    useEffect(()=>{
         setIdSong(song.id)
     }, [song])
    return (
        <>
            <div className='grid grid-cols-1 lg:col-span-2 lg:overflow-hidden lg:overflow-y-scroll lg:p-3'>
            <table className="table-auto w-full">
                <thead className="text-white h-12 sticky -top-3 bg-slate-500 text-sm lg:text-lg">
                <tr className=""> 
                    <th className="w-[10%] pt-2">#</th>
                    <th className="text-left pt-2">Title</th>
                    <th className="w-[40%] pt-2">Author</th>
                    <th className="w-[10%] pt-2">
                    <AiOutlineDownload />
                </th>
                </tr>
            </thead>
            <tbody className=''>
                {DataSongs.map((song:any,index:any) => (
                    <tr key={index}
                    className={`h-14 text-slate-400 bg-slate-800 hover:bg-slate-500 text-xs lg:text-base 
                    ${idSong === song.id && 'text-slate-50 bg-slate-400'}`}
                    onClick={() => handlePlaySong(song.id)}
>
                        <td className='text-center'>{index + 1}</td>
                        <td className='text-left'>{song.name}</td>
                        <td className='text-center'>{song.author}</td>
                        <td>
                        <a href={song.url}> <AiOutlineDownload /></a>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
        </>
    );
}

export default ListSong;