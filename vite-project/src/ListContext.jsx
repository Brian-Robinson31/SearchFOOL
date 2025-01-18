import React, { createContext, useState } from 'react';

export const ListContext = createContext();

export const ListProvider = ({children}) => {
    const [list, setList] = useState([]);

    const addItemToList = (item) => {
        setList((prevList) => [...prevList, item]);
    };
    const removeItemFromList = (index) => {
        setList((prevList) => prevList.filter((_, i) => i !== index));
        alert(`Item removed from list!`);
    };
    return (
        <ListContext.Provider value={{list, addItemToList, removeItemFromList}}>
            {children}
        </ListContext.Provider>
    )
}