import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { GobalState } from '../../GobalState'
import axios from "axios"
export default function Header() {
    const state = useContext(GobalState)
    const [isLogged, setIsLogged] = state.userAPI.isLogged
    const [isAdmin, setIsAdmin] = state.userAPI.isAdmin
    const[booking]=state.userAPI.booking;

     const logoutuser = async ()=>{
        await axios.get('/user/logout')
        
        localStorage.clear()
        window.location.href = "/";
     }
    
    const adminRouter = ()=>{
        return (
            <>
            <li> <Link to="/create_influencer">createinfluencer</Link></li>
            <li> <Link to="/category">Category</Link></li>
            </>
        )
    }

    const loggedRouter = ()=>{
        return (
            <>
            <li> <Link to="/" onClick={logoutuser}>loggout</Link></li>
            </>
        )
    }
    return (
       <header>
           <div className='menu'  >
           <i class="fas fa-caret-down fa-3x" ></i>
           </div>
           <div className='logo'>
               <Link to="/">{isAdmin? "admin":<i class="fas fa-fire-alt"></i>}</Link>

           </div>
        <ul>
            <li><Link to="/">{isAdmin?"admin":"influencer"}</Link></li>
            {isAdmin && adminRouter()}
             <li><Link to="/discovery">khámphá</Link></li>
            <li><Link to="/activity">hoạtđộng</Link></li>
            <li><Link to="/voucher">Ưuđãi</Link></li>
            <li><Link to="/lien-he">Liên hệ</Link></li>
            <li className="sreach"><input placeholder="tim kiem" type="text"/>
            <i class="fa fa-search"></i></li>
           <li className="bell"><Link to="/thongbao">thông báo</Link></li>
           {
                isLogged ? loggedRouter():
                <li className="login"><Link to="/login">đăng nhập</Link></li>
            }

        </ul>
        {
            isAdmin ? "" : <div className="booking">
                <span>{booking.length}</span>
           <Link to="/booking"><i class="far fa-calendar-minus fa-2x"/></Link>
            </div>
        }
       </header>
    )
}
