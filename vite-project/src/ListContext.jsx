import React, { createContext, useState, useEffect } from 'react';

export const ListContext = createContext();

const getInitialList = () => {
    const savedList = localStorage.getItem('animeList');
    if (savedList) {
        try {
            return JSON.parse(savedList);
        } catch (error) {
            console.error('Error loading list from cache:', error);
            return [];
        }
    }
    return [];
};

export const ListProvider = ({children}) => {
    const [list, setList] = useState(getInitialList());

    // Save list to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('animeList', JSON.stringify(list));
    }, [list]);

    const addItemToList = (item) => {
        setList((prevList) => [...prevList, item]);
    };
    const removeItemFromList = (index) => {
        setList((prevList) => prevList.filter((_, i) => i !== index));
    };
    const reorderList = (fromIndex, toIndex) => {
        setList((prevList) => {
            const newList = [...prevList];
            const [removed] = newList.splice(fromIndex, 1);
            newList.splice(toIndex, 0, removed);
            return newList;
        });
    };
    return (
        <ListContext.Provider value={{list, addItemToList, removeItemFromList, reorderList}}>
            {children}
        </ListContext.Provider>
    )
}