import {useState, useContext} from 'react'
import {ListContext} from './ListContext.jsx'
import './App.css'

function ListPage() {
    const { list, removeItemFromList } = useContext(ListContext);

    

    return (
        <>
            <div>
                <h1 className="listTitle">My List</h1>
                <div className="big-container">
                <div className="results-container">
                    {list.map((item, index) => (
                        <div key={index} className="card">
                            <div className="img">
                                <img src={item.images.jpg.image_url} alt={item.title_english || item.title} loading="lazy" />
                            </div>
                            <div className="info">
                                <h3 className="title">{item.title_english || item.title}</h3>
                                <p>{item.synopsis}</p>
                                <p className="add" onClick={() => removeItemFromList(index)}>Delete</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListPage;