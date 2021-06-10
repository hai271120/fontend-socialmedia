 import React,{useContext} from 'react'
 import {Link} from 'react-router-dom'
 import {GobalState} from '../../../../GobalState'
 export default function BtnRender({influencer}) {
     const state = useContext(GobalState)
     const [isAdmin] = state.userAPI.isAdmin
     const addbooking = state.userAPI.addbooking
   
     return (
         <div className ="row">
             { isAdmin ?
             <><Link id="btn_delete" to="#!">
             <button className="btndelete">Delete</button>
            </Link> </> 
             :
           <><Link id="btn_booking" onClick = {() =>addbooking(influencer)}>
                    <i class="far fa-plus-square fa-2x"></i>
                     </Link></>  
            }
         </div>
     )
 }
