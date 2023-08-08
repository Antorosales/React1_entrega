import { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import CounterContainer from "../../common/counter/CounterContainer";
 import { Card, CardContent,Typography, CardMedia, CardActionArea, CardActions, Button } from "@mui/material";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../FirebaseConfig";
import {collection, doc, getDoc} from "firebase/firestore"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ItemDetail = () => {
  const { addToCart, getQuantityById } = useContext(CartContext);

  const [producto, setProducto] = useState({});

  const { id } = useParams();

  const totalQuantity = getQuantityById(id);

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let productRef = doc(productsCollection, id);
    getDoc(productRef).then((res) => {
      setProducto({ ...res.data(), id: res.id });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let productCart = { ...producto, quantity: cantidad };
    addToCart(productCart);

    toast.success("Producto agregado exitosamente", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div>


<Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={producto.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {producto.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <p>${producto.price}</p>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {(typeof(totalQuantity) === "undefined" || producto.stock > totalQuantity) &&
        producto.stock > 0 && (
          <CounterContainer
            stock={producto.stock}
            onAdd={onAdd}
            initial={totalQuantity}
          />
        )}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
      </CardActions>
    </Card>
      

      
      {producto.stock === 0 && <h2>No hay stock</h2>}

      {typeof totalQuantity !== "undefined" &&
        totalQuantity === producto.stock && (
          <h2>Unidad Maxima</h2>
        )}

      <ToastContainer />
    </div>
  );
};

export default ItemDetail;
