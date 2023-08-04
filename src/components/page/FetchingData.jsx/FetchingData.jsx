

const FetchingData = () => {
  
    let promesa = fetch("https://jsonplaceholder.typicode.com/users")
    promesa.then((res)=>res.json()).then((res)=>console.log(res))
    .catch((err)=>console.log(err))
    .finally(()=>console.log("termino el proceso"))


  return (
    <div>
      
    </div>
  )
}

export default FetchingData
