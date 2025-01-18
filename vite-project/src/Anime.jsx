import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import {ListContext} from './ListContext.jsx'

function Anime(){

    const [searchAnime, setSearchAnime] = useState("");
    const [data, setData] = useState([])
    const { addItemToList } = useContext(ListContext)
    function handleSubmit(e) {
        setData([]);
        e.preventDefault();
        axios.get(`https://api.jikan.moe/v4/anime?q=${searchAnime}`)
            .then((response) => {
                setData(response.data.data);
                console.log(response.data.data);

            })
            .catch((error) => {
                console.error('Error fetching anime data:', error);
            });
    }
    function addAnime(anime){
        addItemToList(anime)
        console.log(anime.title_english || anime.title) 
        alert(`${anime.title_english || anime.title} was added to your list!`)
    }

         return (
        <>
    <div className="search-container">
    <div className="search-input">
        <h2>Enter Anime</h2>
        <form onSubmit={(handleSubmit)}>
        <input type="text" placeholder="Search..." value={searchAnime} onChange={(e) => setSearchAnime(e.target.value)}/>
        <button type="submit">Search</button>
        </form>
    </div>
    </div>
    <div className="big-container">
    <div className="results-container">

      {data.map((anime) => { 
        return (
        <div className="card" key={anime.mal_id}>
            <div className="img">
            <img src={anime.images.jpg.image_url} alt={anime.title_english} loading="lazy"/>

            </div>
            <div className="info">
            <h3 className="title">{anime.title_english || anime.title}</h3>
            <p>{anime.synopsis}</p>
            <p className="add" onClick={() => addAnime(anime)}>Add Anime +</p>
            </div>
        </div>
        )}
        )}
    </div>
</div>
        </>
    )
}

export default Anime