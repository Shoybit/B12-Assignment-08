import axios from "axios"
import { useEffect, useState } from "react"

const useProducts = () =>{
const [products,setProducts] = useState([])
const [error,setError] = useState(null)


useEffect( () => {
axios('../Apps.json')
.then(data => setProducts(data.data))
.catch(err => setError(err))

}, [] )

return {products,error}
}

export default useProducts 