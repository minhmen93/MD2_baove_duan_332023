import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useEffect, useState } from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';




export default function Logout() {
    const [login, setLogin] = useState(false);
    const [name, setName] = useState();
    let getUser = JSON.parse(localStorage.getItem("users"))
    useEffect(() => {

        if (getUser) {
            setName(getUser.user.fullname)
            setLogin(true)
        } else {
            setLogin(false)
        }
    }, [getUser])


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

                            <Nav.Link to={'/products'} href="products">Product</Nav.Link>
                        </Nav>
                        <Nav.Link to={'/products'} href="products">Product</Nav.Link>
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
                            <> <Nav.Link to={"/"} href='cart' className='btn-light me-3' >{name}</Nav.Link>
                                {/* <button className="bi bi-box-arrow-right"></button> */}
                                <MDBDropdown>
                                    <MDBDropdownToggle>Dropdown button</MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem link>Action</MDBDropdownItem>
                                        <MDBDropdownItem link>Another action</MDBDropdownItem>
                                        <MDBDropdownItem link>Something else here</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </>
                            : <>
                                <Nav.Link to={"/"} href='cart' className='btn-light me-3' >Cart(0)</Nav.Link>
                                <Nav.Link to={"/login"} href='login' className='btn-light me-3' >Login</Nav.Link>
                                <Nav.Link to={"/register"} href='register' className='btn-light me-2' >Register</Nav.Link>
                            </>
                    };

                </Container>
            </Navbar>

        </>
    );
}


