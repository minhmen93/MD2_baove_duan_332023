import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';

export default function Login() {
    const [userLogin, setUserLogin] = useState({ email: "", password: "" });
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        if (userLogin.email.trim() === "" || userLogin.password.trim() === "") {
            setErrorMessage(" Tài khoản không đúng !!");
            return;
        }
        axios
            .post(
                `http://localhost:8000/login`, userLogin
            )
            .then((res) => {
                console.log(res.data);

                if (res.data.accessToken) {
                    if (res.data.user.permission === 1) {
                        localStorage.setItem("users", JSON.stringify(res.data));
                        navigate("/admin");
                    } else {
                        localStorage.setItem("users", JSON.stringify(res.data));
                        navigate("/products");
                    }
                }
            })
            .catch(err => {
                console.log(err);
                alert("Tài khoản đăng nhập sai")
            })
    }
    return (
        <div className='container'>
            <div className='container-form bg-image' style={{ maxWidth: '1000px 600px' }}>
                <Form className=' form-boder align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://img.lovepik.com//back_pic/05/81/90/095c3d75f91c596.jpg_wh860.jpg' }}>
                    <img src='https://thanhnien.mediacdn.vn/zoom/686_429/Uploaded/dieutrang.qc/2020_02_06/tugo/1_NMOC.png' className='w-100 rounded-top' alt="Sample photo" />
                    <Form.Group className=" form-boder text-black mb-4 m-5" style={{ borderRadius: '25px' }} controlId="formBasicEmail">
                        {/* <h2 className="form-heading">Login</h2> */}
                        <Form.Label className="d-flex flex-row align-items-center mb-2" >Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={userLogin.email} onChange={(e) => setUserLogin({ ...userLogin, email: e.target.value })} />
                        <Form.Text className="text-danger ms-2">
                            {errorMessage.email}
                        </Form.Text >
                        <Form.Label className="d-flex flex-row align-items-center mb-2">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={userLogin.password} onChange={(e) => setUserLogin({ ...userLogin, password: e.target.value })} />
                        <Form.Text className="text-danger ms-2">
                            {errorMessage.password}
                        </Form.Text>
                    </Form.Group>
                    <Form.Text>
                        <Link className="text-black mb-4 m-5" to={"/register"}>Đăng kí tài khoản</Link>
                    </Form.Text>
                    <Form.Group className="di-flex text-black mb-4 m-5" controlId="formBasicCheckbox" >
                        <Button className='button-login' onClick={handleLogin} >Đăng nhập</Button>
                    </Form.Group>

                </Form>
            </div>
        </div>
    )
}
