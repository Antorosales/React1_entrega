 import {AppBar, Badge,Button,Toolbar,Typography} from "@mui/material";
import { CardWidget } from "../common/cartWidget/CardWidget";

export const Navbar = () => {
  return (
   <AppBar position="static">
    <Toolbar>
        <Typography variant="h4" style={{ flexGrow: 1 }}>MAGICWATER</Typography>
        <Button color='inherit'>Home</Button>
        <Button color='inherit'>Tienda</Button>
        <Button color='inherit'>Nosotros</Button>
        <CardWidget />
    </Toolbar>

   </AppBar>
   
  )
}
