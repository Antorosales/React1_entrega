import ProductCard from "../../common/productCard/productCard";


const ItemList = ({items}) => {

  console.log("llego al pressentacional", items);
  return (
    <div>
      <h2 style={{textAlign:'center'}}>Productos</h2>

      <div style={{

      width: "100%",
      display:"flex",
      justifyContent:"space-evenly",
      flexWrap: "wrap"
    
    
    }}>

      {items.map((items)=>{

        return (
     <ProductCard key={items.id} items={items}/>
      );
    })

   }

      </div>

    </div>
  );
}

export default ItemList

