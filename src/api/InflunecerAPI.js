import React,{useEffect,useState} from 'react'
import axios from "axios"
export default function InflunecerAPI() {
    const [influencer,setInfluencer] = useState([])
    useEffect(()=>{
        const getinflunecer = async ()=>{
            const res = await axios.get('/api/influencer')
          setInfluencer(res.data.influencer)
        }
        getinflunecer()
     },[])

    return {
        influencer: [influencer,setInfluencer]
    }
}
