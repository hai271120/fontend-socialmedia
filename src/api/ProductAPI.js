import axios from 'axios';
import React, { useState } from 'react'
export default function ProductAPI() {
    const[product,setProduct] = useState([]);
    useEffect(() => {
    const getproduct = async () =>{
        const res = await axios.get('/api/product')
        setProduct(res.data.product)
    }
    getproduct()
    },[])
    return 
        {
          product: [product,setProduct]
        }
}
