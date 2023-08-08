import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Card, CardActionArea , CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";


const CartContainer = () => {

  const { cart, clearCart, deleteById, getTotalPrice } =
  useContext(CartContext);

let total = getTotalPrice();

const limpiar = () => {
  Swal.fire({
    title: " Quieres vaciar el carrito?",
    showDenyButton: true,
    confirmButtonText: "Si!",
    denyButtonText: `No!`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      clearCart();
      Swal.fire("Carrito vaciado exitosamente", "", "success");
    } else if (result.isDenied) {
      Swal.fire("El carrito queda como estaba", "", "info");
    }
  });
};




  return (
    <div>
      <h1 style={{textAlign:"center" }}>Carro de compra</h1>

      {cart.map((elemento) => {
        return (
          <div key={elemento.id} style={{ display: "inline-flex", margin:"20px" }}>
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <CardMedia
          component="img"
          height="140"
          image= {elemento.img}
          alt="img producto"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {elemento.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          <p>Precio $ {elemento.price}</p>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <p>Cantidad:{elemento.quantity}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary"  onClick={() => deleteById(elemento.id)}>
          Eliminar
        </Button>
      </CardActions>
    </Card>
  
          </div>
        );
      })}
      <CardContent>
      {cart.length > 0 && <button onClick={limpiar}>Limpiar carrito</button>}
          <Typography gutterBottom variant="h5" component="div">
          <h2>Total a pagar:${total}</h2>
          </Typography>
         
        </CardContent>
       
        <Link to="/checkout" ><Button size="small" color="primary">Finalizar compra</Button></Link>
        
       
     
    </div>
  )
}

export default CartContainer
