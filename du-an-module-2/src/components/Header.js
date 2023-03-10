import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Header() {
    const [login, setLogin] = useState(false);
    const [name, setName] = useState();
    let getUser = JSON.parse(localStorage.getItem("users"))
    const navigate = useNavigate()
    useEffect(() => {

        if (getUser) {
            setName(getUser.user.fullname)
            setLogin(true)
        } else {
            setLogin(false)
        }
    }, [getUser])


    const handleLogout = () => {
        localStorage.removeItem("users");
        setLogin(false);
        navigate('/login')
    }

    return (
        <>
            <Navbar bg="outline-warning " expand="lg">
                <Container fluid  >
                    <Nav.Link to={'/'} href="/"><img
                        src="https://cdn.haitrieu.com/wp-content/uploads/2022/05/Logo-IVYmoda.png"
                        width="150"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"

                    /></Nav.Link>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '150px' }}
                            navbarScroll

                        >

                            <Nav.Link to={'/products'} href="products">Product</Nav.Link></Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />

                            <Button variant="outline-success" className='btn-Search' >Search</Button>
                        </Form>

                    </Navbar.Collapse>


                    {
                        login ?
                            <Nav.Link to="#" className='btn-light me-3 icon-logout' >{name}

                                <svg onClick={handleLogout} title="????ng xu???t" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                    <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                </svg>


                            </Nav.Link>
                            : <>
                                <Nav.Link to={"/"} href='cart' className='btn-light me-3' >Cart(0)</Nav.Link>
                                <Nav.Link to={"/login"} href='login' className='btn-light me-3' >Login</Nav.Link>
                                <Nav.Link to={"/register"} href='register' className='btn-light me-2' >Register</Nav.Link>
                            </>
                    }

                </Container>
            </Navbar>

        </>
    );
}


