import { useEffect, useState } from 'react';
import { products } from '../../../../ProductsMock';

import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

  
  
        const [items, setItems]= useState([]);
        const [error, setError]= useState([]);
        const{categoryName} = useParams()

useEffect( () =>{
  // Filtrado de productos por categoria
  let productsFiltrados = products.filter(items => items.categoria === categoryName)

    const tarea = new Promise ((resolve, reject) =>{
        resolve(categoryName === undefined ? products : productsFiltrados);
        
    });
    
    tarea
    .then((respuesta)=> setItems(respuesta))
    .catch((error)=>setError(error));

}, [categoryName]);



  return <ItemList  items={items}/>;
  
};

export default ItemListContainer;
