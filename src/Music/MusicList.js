import React, {useEffect, useState} from 'react'
import MusicData from '../Data/Music.json';
import Music from "./Music";

const MusicList =(props)=>{

    const [musicList,setMusicList] = useState();

    useEffect(()=>{
        setMusicList(MusicData);
    },[])

    return(
        <div className="row justify-content-around">
            {musicList? musicList.musicData.map((music)=>{
                return (<Music name={music.name} image={music.image}/>)
            }):'no data'}
        </div>
    )

}

export default MusicList;
