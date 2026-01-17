import {useState, useContext} from 'react'
import {ListContext} from './ListContext.jsx'
import { useToast, Toast } from './Toast.jsx'
import './App.css'

function ListPage() {
    const { list, removeItemFromList, reorderList } = useContext(ListContext);
    const { toasts, addToast, removeToast } = useToast()
    const [draggedIndex, setDraggedIndex] = useState(null);

    const handleDragStart = (index) => {
        setDraggedIndex(index);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (dropIndex) => {
        if (draggedIndex !== null && draggedIndex !== dropIndex) {
            reorderList(draggedIndex, dropIndex);
            setDraggedIndex(null);
        }
    };

    const handleDragEnd = () => {
        setDraggedIndex(null);
    };

    const handleDelete = (index, itemName) => {
        removeItemFromList(index)
        addToast(`${itemName} removed from your list`, 'success')
    }

    return (
        <>
        <Toast toasts={toasts} removeToast={removeToast} />
            <div>
                <h1 className="listTitle">My List</h1>
                <div className="big-container">
                <div className="results-container">
                    {list.map((item, index) => (
                        <div 
                            key={index} 
                            className={`card ${draggedIndex === index ? 'dragging' : ''}`}
                            draggable
                            onDragStart={() => handleDragStart(index)}
                            onDragOver={handleDragOver}
                            onDrop={() => handleDrop(index)}
                            onDragEnd={handleDragEnd}
                        >
                            <div className="img">
                                <img src={item.images.jpg.image_url} alt={item.title_english || item.title} loading="lazy" />
                            </div>
                            <div className="info">
                                <h3 className="title">{item.title_english || item.title}</h3>
                                <p>{item.synopsis}</p>
                                <p className="add" onClick={() => handleDelete(index, item.title_english || item.title)}>Delete</p>
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