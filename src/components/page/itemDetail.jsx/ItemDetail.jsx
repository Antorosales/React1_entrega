import { useEffect, useState } from "react";
import { products } from "../../../../ProductsMock";
import { useParams } from "react-router-dom";
import CounterContainer from "../../common/counter/CounterContainer";
import { Card, CardContent,Typography, CardMedia, CardActionArea } from "@mui/material";


const ItemDetail = () => {
    const [producto, setProducto]= useState({});

 const {id}= useParams()


    useEffect(()=> {

        let productoSeleccionado = products.find((items) => items.id === +id);
        const tarea = new Promise ((res, rej) =>{
            res(productoSeleccionado)
        });
        tarea.then(res => setProducto(res))
    }, [id]);
    
    const onAdd = (cantidad) => {

        console.log(producto);
        console.log(cantidad);
    };


  return (
    <div>
        
<br />
<Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={producto.img}
          alt="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {producto.tittle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {producto.description} 

          </Typography>
          <Typography variant="body3" color="text.secondary">
          {producto.price} 

          </Typography>
    
          <CounterContainer stock={producto.stock} onAdd={onAdd} />
        </CardContent>
      </CardActionArea>
    </Card>
       

      
    </div>
  );
};

export default ItemDetail
