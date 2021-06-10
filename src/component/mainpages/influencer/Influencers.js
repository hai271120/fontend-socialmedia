import React ,{useContext}from 'react'
import {GobalState} from '../../../GobalState' 
import InfluencerItem  from "../ultis/influenceritem/InfluencerItem"
import Test from '../ultis/influenceritem/Test';
export default function Influencers() {
  const state = useContext(GobalState)
  const [influencer] = state.influnecerAPI.influencer
  const [isAdmin] = state.userAPI.isAdmin
    return (
        <div className='influencer'>
           {
             influencer.map(influencer =>{
              return <InfluencerItem key={influencer._id} influencer={influencer}
              isAdmin = {isAdmin}/>
             })
           }
            <br/>
           {
             influencer.map(influencer=>{
               return <Test key ={influencer._id} influencer={influencer}/>
             })
           } 
        </div>
    )
}
