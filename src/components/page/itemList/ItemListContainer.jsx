import { useEffect, useState } from 'react';


import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../../FirebaseConfig';
import { getDocs, collection, query, where } from "firebase/firestore";


const ItemListContainer = () => {

  
  
        const [items, setItems]= useState([]);
        
        const{categoryName} = useParams()

useEffect( () =>{
  // sin base de datos
  // Filtrado de productos por categoria
  // let productsFiltrados = products.filter(items => items.categoria === categoryName)

  //   const tarea = new Promise ((resolve, reject) =>{
  //       resolve(categoryName === undefined ? products : productsFiltrados);
        
  //   });
    
  //   tarea
  //   .then((respuesta)=> setItems(respuesta))
  //   .catch((error)=>setError(error));
//coleciones de la base de datos
    let productsCollection = collection(db, "products");
    let consulta;
  if(categoryName){
    consulta = query( productsCollection, where("categoria", "==", categoryName))
  }else{
    consulta = productsCollection
  }

  getDocs(consulta).then((res)=>{
    let productos = res.docs.map( doc => {
      return {...doc.data(), id: doc.id}
    } )
    
    setItems(productos)
  })
  

}, [categoryName]);



  return <ItemList  items={items}/>;
  
};

export default ItemListContainer;
