

import { BrowserRouter} from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import CartContextComponent from "./context/CartContext";


//configuracion de routing 
function App() {
  return ( 
    <BrowserRouter>
    <CartContextComponent >
    <AppRoutes />
    </CartContextComponent>
       
    </BrowserRouter>
    

  );
  
}

export default App;
