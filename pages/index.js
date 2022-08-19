import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import DataSongs from "../components/data/songs.json";
import DetailSong from "../components/DetailSong";
import ListSong from "../components/ListSong";
import { Songs } from "../lib/context/Context";
import { useState } from "react";
import Playing from "../components/Playing";
export default function Home() {
    const [song, setSong] = useState(DataSongs[0]);
    const handleSetSong = (idSong) => {
        const song = DataSongs.find((song) => song.id === idSong);
        if (!song) {
            setSong(DataSongs[0]);
        } else {
            setSong(song);
        }
    };
    return (
        <>
            <div>
                <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
                    <Header />
                    <div className="grid grid-cols-1 bg-black lg:grid-cols-3 text-neutral-400 h-screen-main-player">
                        <DetailSong />
                        <ListSong />
                    </div>
                    <Playing />
                </Songs.Provider>
            </div>
        </>
    );
}
