import Layout from "./components/layout/Layout";
import ItemDetail from "./components/page/itemDetail.jsx/ItemDetail";

import ItemListContainer from "./components/page/itemList/ItemListContainer"
// import Home from "./components/page/home/Home";

import { BrowserRouter,Routes,Route } from "react-router-dom";

//configuracion de routing 
function App() {
  return ( 
    // <Home />
   <div>

    {/* <Navbar />
    <ItemListContainer /> */}

    <BrowserRouter>
    <Routes>
      {/* Rutas que se muestren en el navbar */}
    <Route element={<Layout />}> 

    <Route path="/" element={<ItemListContainer />}/>
    <Route path="/category/:categoryName" element={<ItemListContainer />} />
    <Route path="/itemDetail/:id" element={<ItemDetail />} />
   
    </Route>
    <Route path="*" element={<h2>404 not found</h2>} />
    </Routes>
    </BrowserRouter>
    
   </div>
   
    
   


    
  );
  
}

export default App;
