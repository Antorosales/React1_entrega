import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { CardWidget } from "../../common/cartWidget/CardWidget";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (

    <div>

      <AppBar position="static">

        <Toolbar>
          <Typography variant="h4" style={{ flexGrow: 1 }}>MAGICWATER</Typography>
          
          <Button color='inherit'><Link to="/">Todas</Link></Button>
          <Button color='inherit'><Link to="/category/bidon">Bidón</Link></Button>
          <Button color='inherit'><Link to="/category/soporte">Soporte</Link></Button>
          <CardWidget />

        </Toolbar>
      </AppBar>
      {/* mandame una foto de lo que esta mostrando */}
    </div>





  );


}

export default Navbar
