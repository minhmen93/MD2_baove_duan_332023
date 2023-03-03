import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";


const initUser = {
    fullname: "",
    email: "",
    password: "",
    rePassword: "",
};

export default function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [newUser, setNewUser] = useState(initUser);
    const [errMessage, setErrMessage] = useState(initUser);


    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setNewUser({ ...newUser, [name]: value });
        validateUser(name, value);
    };
    const validateUser = (name, value) => {
        if (name === "fullname") {
            if (value.trim() === "") {
                setErrMessage({ ...errMessage, [name]: "Không được để trống" });
            } else if (value.trim().length <= 4) {
                setErrMessage({
                    ...errMessage,
                    [name]: "Đó không phải là  tên đầy đủ",
                });
            } else {
                setErrMessage({ ...errMessage, [name]: "" });
            }
        }
        if (name === "email") {
            const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

            if (value.trim() === "") {
                setErrMessage({ ...errMessage, [name]: "Không được để trống" });
            } else if (!pattern.test(value)) {
                setErrMessage({ ...errMessage, [name]: "Không đúng định dạng" });
            } else {
                checkEmailExist(value).then((res) => {
                    if (res) {
                        setErrMessage({ ...errMessage, [name]: "Email đã tồn tại" });
                    } else {
                        setErrMessage({ ...errMessage, [name]: "" });
                    }
                });
            }
        }
        if (name === "password") {
            if (value.trim() === "") {
                setErrMessage({ ...errMessage, [name]: "Không được để trống" });
            } else if (value.trim().length < 6) {
                setErrMessage({
                    ...errMessage,
                    [name]: "Mật khẩu phải ít nhất 6 kí tự",
                });
            } else {
                setErrMessage({ ...errMessage, [name]: "" });
            }
        }
        if (name === "rePassword") {
            if (newUser.password !== value) {
                setErrMessage({ ...errMessage, [name]: "Mật khẩu không trùng khớp" });
            } else {
                setErrMessage({ ...errMessage, [name]: "" });
            }
        }
    };

    const checkEmailExist = (email) => {
        return axios
            .get(`http://localhost:8000/users?email=${email}`)
            .then((res) => res.data.length > 0)

            .catch((err) => console.log(err));
    };
    const handleRegister = (e) => {
        let condition_1 =
            newUser.fullname !== "" &&
            newUser.email !== "" &&
            newUser.password !== "" &&
            newUser.rePassword !== "";
            console.log(errMessage);
        let condition_2 =
            errMessage.fullname === "" &&
            errMessage.email === "" &&
            errMessage.password === "" &&
            errMessage.rePassword === "";

        console.log(condition_1, condition_2);
        if (condition_1 && condition_2) {
            axios
                .post("http://localhost:8000/users", newUser)
                .then(() => {
                   
                    navigate("/login");
                })
                .catch((err) => console.log(err));
        }
        e.preventDefault();
    };


    return (
        <div className='container-form-register bg-image' style={{ maxWidth: '1000px 600px' }}>
            <Form className=' form-boder align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://img.lovepik.com//back_pic/05/81/90/095c3d75f91c596.jpg_wh860.jpg' }}>
                <img src='https://thanhnien.mediacdn.vn/zoom/686_429/Uploaded/dieutrang.qc/2020_02_06/tugo/1_NMOC.png' className='w-100 rounded-top' alt="Sample photo" />
                <Form.Group className=" form-boder text-black mb-4 m-5" style={{ borderRadius: '25px' }} controlId="formBasicEmail">
                    <Form.Label className="d-flex flex-row align-items-center mb-2 fs-5" >User Name</Form.Label>
                    <Form.Control type="userName" placeholder="User Name" name="fullname" value={newUser.fullname} onChange={handleChange} />
                    <Form.Text className="text-danger ms-2">
                        {errMessage.fullname}
                    </Form.Text>
                    <Form.Label className="d-flex flex-row align-items-center mb-2 fs-5">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={newUser.email} onChange={handleChange} />
                    <Form.Text className="text-danger ms-2">
                        {errMessage.email}
                    </Form.Text>
                    <Form.Label className="d-flex flex-row align-items-center mb-2 fs-5">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={newUser.password} onChange={handleChange} />
                    <Form.Text className="text-danger ms-2">
                        {errMessage.password}
                    </Form.Text>
                    <Form.Label className="d-flex flex-row align-items-center mb-2 fs-5">RePassword</Form.Label>
                    <Form.Control type="rePassword" placeholder="RePassword" name="rePassword" value={newUser.rePassword} onChange={handleChange} />
                    <Form.Text className="text-danger ms-2">
                        {errMessage.rePassword}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="di-flex text-black mb-4 m-5" controlId="formBasicCheckbox">

                    <Button onClick={handleRegister} className='button-login'>Đăng ký</Button>
                </Form.Group>

            </Form>
        </div>
    );
}
