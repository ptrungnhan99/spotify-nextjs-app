import { useContext, useEffect, useState } from "react";
import { Songs } from "../lib/context/Context";
function ListSong() {
    const { DataSongs, handleSetSong, song } = useContext(Songs);
    const [idSong, setIdSong] = useState(0);
    const handlePlaySong = (id) => {
        setIdSong(id);
        handleSetSong(id);
    };
    useEffect(() => {
        setIdSong(song.id);
    }, [song]);
    return (
        <div className="col-span-2 overflow-hidden overflow-y-scroll bg-slate-800">
            <table className="relative w-full table-auto">
                <thead className="sticky top-0 h-12 text-white bg-slate-700">
                    <tr>
                        <th className="w-[10%] min-w-[30px]">#</th>
                        <th className="w-[60%] text-left">Title</th>
                        <th className="w-[20%]">Author</th>
                        <th className="w-[10%]">
                            <i className="fa fa-download"></i>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {DataSongs.map((song, index) => (
                        <tr
                            key={index}
                            className={`h-12 hover:bg-slate-600 ${
                                idSong === song.id && "text-teal-400"
                            }`}
                            onClick={() => handlePlaySong(song.id)}
                        >
                            <td className="text-center">{index + 1}</td>
                            <td>{song.name}</td>
                            <td className="text-center">{song.author}</td>
                            <td className="text-center">
                                <a href={song.url}>
                                    <i className="fa fa-download"></i>
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default ListSong;
