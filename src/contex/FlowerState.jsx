import React, { createContext, useReducer } from 'react';
import FlowerReducer from './FlowerReducer';

const initialState = {
  flowers: [
    { id: 1, name: 'Orchid', url: 'https://cdn.pixabay.com/photo/2016/03/30/22/04/orchid-1291675_960_720.jpg' },
    { id: 2, name: 'Rose', url: 'https://cdn.pixabay.com/photo/2016/09/22/17/41/rose-1687884_960_720.jpg' },
    { id: 3, name: 'Bloosom', url: 'https://cdn.pixabay.com/photo/2016/03/16/13/41/cherry-blossom-1260641_960_720.jpg' },
    { id: 4, name: 'Daisy', url: 'https://cdn.pixabay.com/photo/2015/04/30/18/53/daisy-747320_960_720.jpg' },
  ],
};

export const FlowerContex = createContext(initialState);


export const FlowerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FlowerReducer, initialState);

  if(JSON.parse(localStorage.getItem('flowers'))===null){
    localStorage.setItem('flowers', JSON.stringify(state.flowers));
  }
  state.flowers=[...JSON.parse(localStorage.getItem('flowers'))];

  const addFlower = (flower) =>{
    flower.id = state.flowers.length+1;
    const localFlowers = JSON.parse(localStorage.getItem('flowers')) ;
    localFlowers.push(flower);
    localStorage.setItem('flowers', JSON.stringify(localFlowers));

    dispatch({
      type: 'ADD_FLOWER',
      payload: flower
    });
  };

  const removeFlower = (id) =>{
    
    const localFlowers = JSON.parse(localStorage.getItem('flowers')) ;
    localFlowers.splice(id-1, 1);
    console.log(localFlowers);
    localFlowers.forEach((element, index) => {
      element.id = index+1;
    });
    localStorage.setItem('flowers', JSON.stringify(localFlowers));

    dispatch({
      type: 'ADD_FLOWER',
      payload: localFlowers
    });
  };

  return <FlowerContex.Provider value={{flowers: state.flowers, addFlower, removeFlower}}>{children}</FlowerContex.Provider>;
};



