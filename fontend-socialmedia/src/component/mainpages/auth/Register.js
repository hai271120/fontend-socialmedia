import React, { useState } from 'react'
import { Link ,useHistory} from "react-router-dom"
import axios from "axios"
export default function Register() {
   const history = useHistory();
    const [user, setUser] = useState({
        name: '', email: '', password: '', phone: ''
    })

    const onChangeInput = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    const registerSubmit = async e => {
        e.preventDefault()
        try {
            await axios.post('/user/register', { ...user })

            localStorage.setItem('firstLogin', true)
            history.push("/login")
        } catch (err) {
            alert(err.response.data.msg)
        }
    }
    return (
        <div className="screen">
        <div className="login-page">
            <form onSubmit={registerSubmit}>
                <h2>logo</h2>
                <input type="number" name="phone" required
                    placeholder="phone" value={user.phone} onChange={onChangeInput} />
                <input type="text" name="name" required
                    placeholder="Name" value={user.name} onChange={onChangeInput} />

                <input type="email" name="email" required
                    placeholder="Email" value={user.email} onChange={onChangeInput} />

                

                <input type="password" name="password" required autoComplete="on"
                    placeholder="Password" value={user.password} onChange={onChangeInput} />

                <div className="row">
                    <p>Bạn đã có tài khoản?<button type="submit">Register</button></p>
                    <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
        </div>
    )
}
