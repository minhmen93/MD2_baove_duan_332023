

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function HeaderAdmin() {

    const [name, setName] = useState();
    let getUser = JSON.parse(localStorage.getItem("users"))
    useEffect(() => {

        if (getUser) {
            setName(getUser.user.fullname)

        }
    }, [getUser])
    let navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("users");
        navigate('/login')
    }

    return (
        <>
            <Navbar bg="outline-warning " expand="lg">
                <Container fluid  >
                    <Nav.Link to={'/admin'} ><img
                        src="https://cdn.haitrieu.com/wp-content/uploads/2022/05/Logo-IVYmoda.png"
                        width="150"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"

                    /></Nav.Link>

                    <Navbar.Toggle aria-controls="navbarScroll" />

                    <Nav.Link to="#" className='btn-light me-3 icon-logout' >{name}

                        <svg onClick={handleLogout} title="Đăng xuất" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                            <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                        </svg>


                    </Nav.Link>


                </Container>
            </Navbar>

        </>
    );
}