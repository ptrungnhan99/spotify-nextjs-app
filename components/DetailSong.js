import { useContext } from "react";
import { Songs } from "../lib/context/Context";
function DetailSong() {
    const { song } = useContext(Songs);
    return (
        <div className="col-span-1 p-3 bg-slate-700">
            <div className="text-[#38bdf8] font-bold">Now playing</div>
            <div className="text-2xl">Harpuia [NCS Release]</div>
            <div className="flex items-center justify-center mt-16">
                <img className="w-64" src={song.links.images[0].url} alt="" />
            </div>
            <div className="flex items-center h-24 justify-evenly">
                <img
                    className="w-16 rounded-full img-spin"
                    alt="logo"
                    src={song.links.images[1].url}
                />
                <span className="text-xl text-white">{song.author}</span>
            </div>
        </div>
    );
}
export default DetailSong;
