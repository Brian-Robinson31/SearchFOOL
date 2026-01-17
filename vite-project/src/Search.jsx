import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import './App.css'
import {ListContext} from './ListContext.jsx'
import { useToast, Toast } from './Toast.jsx'



function Search(){

    const [searchManga, setSearchManga] = useState("");
    const [data, setData] = useState([])
    const { addItemToList } = useContext(ListContext)
    const { toasts, addToast, removeToast } = useToast()
    
    function handleSubmit(e) {
        e.preventDefault();
        axios.get(`https://api.jikan.moe/v4/manga?q=${searchManga}`)
            .then((response) => {
                setData(response.data.data);
            })
            .catch((error) => {
                console.error('Error fetching manga data:', error);
                addToast('Error fetching manga data', 'error')
            });
    }
    function addItem(manga){
        addItemToList(manga)
        addToast(`${manga.title_english || manga.title} added to your list!`, 'success')
    }
    

         return (
        <>
        <Toast toasts={toasts} removeToast={removeToast} />
    <div className="search-container">
    <div className="search-input">
        <h2>Enter Manga</h2>
        <form onSubmit={(handleSubmit)}>
        <input type="text" placeholder="Search..." value={searchManga} onChange={(e) => setSearchManga(e.target.value)}/>
        <button type="submit">Search</button>
        </form>
    </div>
    </div>
    <div className="big-container">
    <div className="results-container">
      {data.map((manga) => { 
        return (
        <div className="card" key={manga.mal_id}>
            <div className="img">
            <img src={manga.images.jpg.image_url} alt={manga.title_english} loading="lazy"/>

            </div>
            <div className="info">
            <h3 className="title">{manga.title_english || manga.title}</h3>
            <p>{manga.synopsis}</p>
            <p className="add" onClick={ () => addItem(manga)}>Add to list +</p>
            </div>
        </div>
        )}
        )}
    </div>
</div>
        </>
    )
}


export default Search;