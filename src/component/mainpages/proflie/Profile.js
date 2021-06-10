import React, { useContext, useState, useEffect } from 'react'
import { useParams, Link, useHistory } from "react-router-dom"
import { GobalState } from "../../../GobalState"

export default function Proflie() {
    const history = useHistory();
    const params = useParams()
    const state = useContext(GobalState)
    const [profile, setprofile] = useState([])
    const [influencer] = state.influnecerAPI.influencer
    const addbooking = state.userAPI.addbooking
    useEffect(() => {
        if (params) {
            influencer.forEach(influencer => {
                if (influencer._id === params.id) setprofile(influencer)
            })
        }
    }, [params, influencer])
    if (profile.length === 0) return null;
    // btnreport(()=>{
    //     history.push('/report');
    // })

    return (
        <div className="profile-card">
            <div className="cover-image" id="banner">
                <img src={profile.images.url} alt="" />
                </div>
                <div className='btn'>
                    <button className="booking" onClick ={()=>addbooking(profile)} >Booking</button>
                    <button className="report" >Report</button>
                </div>


            <br />
            <div className="image-avatar">
                <img src={profile.images.url} alt="" />
                <span>
                    <h3>{profile.name}</h3>
                    <h4>{profile.address}</h4>
                </span>
            </div>
            <br />
            <div className='linkscoial'>
             <a href={profile.facebook}><i class="fab fa-facebook-square fa-2x"/></a>
                <br />
               <a href={profile.instagram}><i class="fab fa-instagram fa-2x"/></a>
            </div>
            <br/>
            <br/>

            <div className="Featured-photo">
                <div>Anh noi bat</div>
                < input type="file" />
            </div>
        </div>
    )
}
