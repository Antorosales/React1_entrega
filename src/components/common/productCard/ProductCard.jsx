import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
// 
const ProductCard = ({items}) => {
  return (
    
         <Card key={items.id} sx={{ minWidth: 345 }}>
          <CardMedia
            component="img"
            alt="Producto"
            height="140"
            image={items.img}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {items.tittle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {items.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
               <Link to={`/itemDetail/${items.id}`}>Ver Detalle </Link> 
               </Button>
         </CardActions>
        </Card>
    
  )
}

export default ProductCard
