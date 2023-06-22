

import { Navbar } from "../../layout/Navbar"
import ItemList from "../itemList/ItemList"



const Home = () => {
//se puede ocupar js
   


  return ( <>
   
    <Navbar />
    <ItemList saludo = {"Bienvenido a AGUITA"} />
    
    </>
   
  )
}

export default Home