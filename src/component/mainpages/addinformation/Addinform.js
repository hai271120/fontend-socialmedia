import React ,{useState}from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'
export default function Addinform() {
    
      // name,phone,email,linkpage,job,address,note,sanpham
    const [name,setName] =useState('')
    const [phone,setPhone] =useState('')
    const [email,setEmail] =useState('')
    const [linkpage,setLinkpage] =useState('')
    const [job,setJob] =useState('')
    const [address,setAddress] =useState('')
    const [note,setNote] =useState('')
    const [sanpham,setSanpham] =useState('')
    //    const onchangeinput = e =>{
//         const {name,value} = e.target;
//        setAddinfrom({...addinform,[name]:value})
//     } 
    const continued = async e =>{
        e.preventDefault()
       try {
        await axios.post('/user/addinform', {name,phone,email,linkpage,job,address,note,sanpham})
        localStorage.setItem("success",true)
       console.log("thang cong");
       } catch (err) {
        alert(err.response.data.msg)
       }
        
    }
    const test= ()=>{
        return(
            <div>
                test
            </div>
        )
    }
    return (
        <div className="container">
            <div className="box-main">
                <div className="title-main">
                    <h3>Thông tin booking</h3>
                </div>
                <div className='body-main'>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Họ và tên</label>
                                <input type="text" className="form-control fullnameBooking" value={name} onChange={(e) => setName(e.target.value)} name="name"></input>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Số điện thoại</label>
                                <input type="text" className="form-control phoneBooking"  value ={phone} onChange={(e) => setPhone(e.target.value)} name="phone"/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" placeholder="Chúng tôi sẽ gửi báo giá qua email hoặc tài khoản của bạn" className="form-control emailBooking"  value ={email} onChange={(e) =>setEmail(e.target.value)} name ="email"/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                            <label>Link Fanpage / Website</label>
                                <input type="text" className="form-control linkWebsite" value ={linkpage} onChange={(e) => setLinkpage(e.target.value)}  />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                            <label>Sản phẩm</label>
                                <input type="text" className="form-control sanpham"  value ={sanpham} onChange={(e) => setSanpham(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                            <label>Mô tả công việc</label>
                                <input type="text" className="form-control jobBooking"  value ={job} onChange={(e) => setJob(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                            <label>Địa chỉ check-in (nếu có)</label>
                                <input type="text" className="form-control addressBooking" no-required="true"  value ={address} onChange={(e) => setAddress(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                            <label>Lưu ý dành cho influencer</label>
                                <input type="text" className="form-control noteBooking" no-required="true" value ={note}onChange={(e) => setNote(e.target.value)} />
                            </div>
                        </div>
                        <br/>
                        
                    </div>
                </div>
                <div class="col-sm-12 mt-10">
                           <Link to ="/booking"> <span class="btn btn-light back-bt">Trở về</span> </Link>
                           <Link to="/handling"> <button class="btn btn-primary btn-con pull-right bookingNow"  onClick ={continued}>Tiếp tục</button></Link>
                           <div className="loadingBooking">Chúng tôi đang tạo booking theo yêu cầu của bạn, vui lòng đợi trong giây lát.</div>
                            </div>
                            <Link to="/handling">ttt</Link>
                        
            </div>
        </div>
    )
}
