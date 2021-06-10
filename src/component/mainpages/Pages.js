import React,{useContext} from 'react'
import {Switch,Route, BrowserRouter} from "react-router-dom"
import Influener from "../mainpages/influencer/Influencers"
import Booking from "../mainpages/booking/Booking"
import Login from "../mainpages/auth/Login"
import Register from "../mainpages/auth/Register"
import Addinform from "../mainpages/addinformation/Addinform"
import Profile from "../mainpages/proflie/Profile"
import Notfound from "../mainpages/ultis/Not-found/Notfound"
import Discovery from "../mainpages/discovery/Discovery"
import {GobalState} from '../../GobalState'
import Handling from "./handling/Handling"
export default function Pages() {
    const state = useContext(GobalState);
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    return (
        <Switch>
            <Route path="/" exact component={Influener}></Route>
            <Route path="/login" exact component={isLogged ? Notfound : Login} />
            <Route path="/register" exact component={isLogged ? Notfound : Register} />
            <Route path="/booking" exact component={Booking}></Route>
            <Route path ="/addinform" exact component ={Addinform}></Route>
            <Route path="/profile/:id" exact component ={Profile}></Route>
            <Route path="*" exact component={Notfound}></Route>
            <Route path ="/discovery" exact component ={Discovery}></Route>
            <Route path="/handling" exact component={Handling}></Route>
        
        </Switch>
    )
}
