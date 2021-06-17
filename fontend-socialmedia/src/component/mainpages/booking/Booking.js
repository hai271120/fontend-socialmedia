import React, { useContext } from 'react'
import { GobalState } from "../../../GobalState"
import {Link} from "react-router-dom"
import axios from "axios"
export default function Booking() {
    const state = useContext(GobalState)
    const [booking,setBooking] = state.userAPI.booking
    const [token] = state.token
    const addtobooking = async ()=>{
        await axios.patch('/user/addbooking',{booking}, {
            headers: {Authorization: token}
        })
    }
    const increment = (id) =>{
        booking.forEach(item => {
            if(item._id === id){
                item.quantity += 1
            }
        })

        setBooking([...booking])
        addtobooking(booking)
    }
    const decrement = (id) =>{
        booking.forEach(item => {
            if(item._id === id){
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
            }
        })

        setBooking([...booking])
        addtobooking(booking)
    }
    const deleteinfluencer = id =>{
        if(window.confirm("Do you want to delete KoL?")){
            booking.forEach((item, index) => {
                if(item._id === id){
                    booking.splice(index, 1)
                }
            })

            setBooking([...booking])
            addtobooking(booking)
        }
    }
    console.log(booking);
    if (booking.length === 0) return <h2>khong co san pham</h2>
    return (
        <div className="container">
            <div className='col'>
            <div className ="title-main">
                        <h3>Booking influencers
                        <span className="numberbook numberbook-influencer">{booking.length}</span>
                        </h3>
                        <button className='delete-all-influencer'>Xoá tất cả</button>
                    </div>
        <div className ="box-main">{
            booking.map(influencer => (
                <div key = {influencer._id}>
                    <div className='list-booking'>
                        <div className ='item-booking'>
                            <span className="close-book remove-influencer" onClick ={() =>deleteinfluencer(influencer._id)}><i class="far fa-times-circle"></i></span>
                        <img className='img-booking' src={influencer.images.url} />
                        <div className="txt-booking">
                            <h3 className="name-kol">{influencer.name}</h3>
                            <div className= "location-user">{influencer.address}</div>
                            <ul className='social-booking'>
                                <li className='booking-facebook'>
                                    <h3>Facebook</h3>
                                    <p>so folow</p>
                                    <p>số lượng post</p>
                                    <div className="amount">
                                <button onClick={() => decrement(influencer._id)}> - </button>
                                <span>{influencer.quantity}</span>
                                <button onClick={() => increment(influencer._id)}> + </button>
                            </div>
                                </li>
                                <li className='booking-instagram'>
                                    <h3>Instagram</h3>
                                    <p>so folow</p>
                                    <p>số lượng post</p>
                                    <div className="amount">
                                <button onClick={() => decrement(influencer._id)}> - </button>
                                <span>{influencer.quantity}</span>
                                <button onClick={() => increment(influencer._id)}> + </button>
                            </div>
                                </li>
                            </ul>
                            </div>
                        </div>
                        

                    </div>
                </div>
            ))
        }
        </div>
        <div className ="body-main">
            <a href="/" className=" btnbtn-danger add-more-bt"><i class="fas fa-plus-circle fa-3x "></i></a>
        </div>
         </div> 
        <div className='col-1'>
        <div class="box-main booking-info">
        <div class="title-main">
            <h3>Thông tin booking</h3>
        </div>
        <div className="body-main">
            <div className ='form-group'>
                <label>Mô tả công việc</label>
                <select className ="from-control booking-description">
                    <option value='Post ảnh/video'>"Post ảnh/video"</option>
                    <option value='chụp ảnh sản phẩm , post bài viết'>"chụp ảnh sản phẩm , post bài viết"</option>
                    <option value='Chụp sản phẩm không post '>"Chụp sản phẩm không post"</option>
                    <option value='Chụp ảnh tại Sutdio/ Địa chỉ cụ thể '>"Post ảnh/video"</option>
                    <option value='Check in'>"Check in"</option>
                    <option value='Up Story'>"Up story"</option>
                    <option value='Share Post/Link'>"Share Post/Link"</option>
                    <option value='Tham gia event'>"Tham gia event"</option>
                    <option value='Quay/Chụp ảnh TVC'>"Quay/Chụp ảnh TVC"</option>
                    <option value='Khác'>"Khác"</option>
                </select>
            </div>
            <div className='form-group'>
                <label>Khác (Nếu có)</label>
                <input id="ff" className ="form-control textarea-book brief"></input>
            </div>
            <div className='form-group'>
                <label>"Bạn có muốn hỗ trợ Content Viral ?"</label>
                <label className="radio-label">
                <input type ="radio" name ="supportContent" checked="checked" value="không"/>
                "Không"
                </label>
                <label className="radio-label">
                <input class="mg-l-10" type="radio" name="supportContent" value="Có"/>
                "Có"
                </label>
            </div>
            <div className="form-group">
                <b className="show-coupon"></b>
                <div className="promotion view-coupon">Thêm ưu đãi</div>
            </div>
            <br/>
            <Link to ='/addinform'><span class="btn btn-primary btn-block continute-booking">Tiếp tục</span></Link>
        </div>
        </div>
        </div>
        </div>
    )
}
