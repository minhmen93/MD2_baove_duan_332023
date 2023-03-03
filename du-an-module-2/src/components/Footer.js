import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBRipple } from 'mdb-react-ui-kit';



export default function Footer() {
    return (
        <>

            <MDBFooter className='text-center text-white  me-8 p-2' style={{ backgroundColor: '#white' }}>




                <h1 className='text-uppercase fw-bold mb-4'>GALLERY</h1>
                <MDBRow className='justify-content-around w-100 px-3 m-0'>

                    <MDBCol lg='2' md='12' className='mb-4 mb-0'>
                        <MDBRipple
                            rippleColor='light'
                            className='bg-image hover-overlay shadow-1-strong rounded'
                        >
                            <img src='https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/11/22/52ab8e1bb74afb35a55ff37264bb9a1e.jpg' className='w-100' />
                            <a href='#'>
                                <div
                                    className='mask'
                                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                ></div>
                            </a>
                        </MDBRipple>
                    </MDBCol>
                    <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                        <MDBRipple
                            rippleColor='light'
                            className='bg-image hover-overlay shadow-1-strong rounded'
                        >
                            <img src='https://pubcdn.ivymoda.com/files/news/2023/02/08/695e63a210e701b71141a6bd66f52edb.jpg' className='w-100' />
                            <a href='#'>
                                <div
                                    className='mask'
                                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                ></div>
                            </a>
                        </MDBRipple>
                    </MDBCol>
                    <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                        <MDBRipple
                            rippleColor='light'
                            className='bg-image hover-overlay shadow-1-strong rounded'
                        >
                            <img src='https://pubcdn.ivymoda.com/files/news/2023/02/08/685c063538d7eb29f72843503238497e.jpg' className='w-100' />
                            <a href='#'>
                                <div
                                    className='mask'
                                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                ></div>
                            </a>
                        </MDBRipple>
                    </MDBCol>
                    <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                        <MDBRipple
                            rippleColor='light'
                            className='bg-image hover-overlay shadow-1-strong rounded'
                        >
                            <img src='https://pubcdn.ivymoda.com/files/news/2023/02/08/f41442c678b3bb1e2b926c88bff351db.jpg' className='w-100' />
                            <a href='#'>
                                <div
                                    className='mask'
                                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                ></div>
                            </a>
                        </MDBRipple>
                    </MDBCol>

                    <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                        <MDBRipple
                            rippleColor='light'
                            className='bg-image hover-overlay shadow-1-strong rounded'
                        >
                            <img src='https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/11/22/e3714ac7810f688300241d0a972c0026.jpg' className='w-100' />
                            <a href='#'>
                                <div
                                    className='mask'
                                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                ></div>
                            </a>
                        </MDBRipple>
                    </MDBCol>
                    <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                        <MDBRipple
                            rippleColor='light'
                            className='bg-image hover-overlay shadow-1-strong rounded'
                        >
                            <img src='https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/11/22/1083202c7a7e7edf0e322f7ad17b9e1f.jpg' className='w-100' />
                            <a href='#'>
                                <div
                                    className='mask'
                                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                ></div>
                            </a>
                        </MDBRipple>
                    </MDBCol>
                </MDBRow>


            </MDBFooter>
            <MDBFooter bgColor='white' className='text-center text-lg-start text-muted text-white '>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span></span>
                    </div>

                    <div>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="facebook-f" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="twitter" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="google" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="instagram" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="linkedin" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="github" />
                        </a>
                    </div>
                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon />
                                    Công ty Cổ phần Dự Kim với số đăng ký kinh doanh: 0105777650
                                </h6>
                                <p md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                    Địa chỉ đăng ký: Tổ dân phố Tháp, P.Đại Mỗ, Q.Nam Từ Liêm, TP.Hà Nội, Việt Nam <br></br>

                                    Số điện thoại: 0243 205 2222 <br></br>

                                    Email: cskh@ivy.com.vn <br></br>
                                </p>
                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Giới thiệu</h6>
                                <p>
                                    <a href='#' className='text-reset'>
                                        Về IVY moda
                                    </a>
                                </p>
                                <p>
                                    <a href='#' className='text-reset'>
                                        Tuyển dụng
                                    </a>
                                </p>
                                <p>
                                    <a href='#' className='text-reset'>
                                        Hệ thống cửa hàng
                                    </a>
                                </p>

                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Dịch vụ khách hàng</h6>
                                <p>
                                    <a href='#' className='text-reset'>
                                        Chính sách điều khoản
                                    </a>
                                </p>
                                <p>
                                    <a href='#' className='text-reset'>
                                        Hướng dẫn mua hàng
                                    </a>
                                </p>
                                <p>
                                    <a href='#' className='text-reset'>
                                        Chính sách thanh toán
                                    </a>
                                </p>
                                <p>
                                    <a href='#' className='text-reset'>
                                        Chính sách đổi trả
                                    </a>
                                </p>
                            </MDBCol>



                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Liên hệ</h6>
                                <p>
                                    <a href='#' className='text-reset'>
                                        Hotline
                                    </a>
                                </p>
                                <p>
                                    <a href='#' className='text-reset'>
                                        Email
                                    </a>
                                </p>
                                <p>
                                    <a href='#' className='text-reset'>
                                        Messenger
                                    </a>
                                </p>

                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    <a className='text-reset fw-bold' href='http://localhost:3000/home'>
                        @Copy right 2023
                    </a>
                </div>
            </MDBFooter>
        </>
    );
}