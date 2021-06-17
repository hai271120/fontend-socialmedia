 import{ useContext,useState,useEffect} from 'react'
 import axios from "axios"
 export default function UserAPI(token) {
     const [isLogged, setIsLogged] = useState(false)
     const [isAdmin, setIsAdmin] = useState(false)
     const [booking,setBooking] = useState([])
     useEffect(()=>{
         if(token){
             const getUser = async ()=>{
                 try{
                     const res = await axios.get('/user/infor',{
                         headers: {Authorization: token}
                     })
                    
                     setIsLogged(true)
                     res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false)
                    setBooking(res.data.booking)
                 }catch (err){
                     alert(err.response.data.msg)
                }
             }
             getUser();
         }
     },[token]);
     const addbooking = async (influencer) => {
        if(!isLogged) return alert("Please login to continue buying")

        const check = booking.every(item =>{
            return item._id !== influencer._id
        })

        if(check){
            setBooking([...booking, {...influencer, quantity: 1}])
            await axios.patch('/user/addbooking', {booking: [...booking, {...influencer, quantity: 1}]}, {
                headers: {Authorization: token}
            })
        }else{
            alert("This has been added to booking.")
        }
    }

     return {
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        booking:[booking,setBooking],
        addbooking: addbooking,
     }
 }
