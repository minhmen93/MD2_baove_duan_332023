import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import {  act_delete_product, act_get_product } from '../redux/actions';


export default function ListProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const listProduct = useSelector((state) => state.products);

    const handleDelete = (id) => {
        dispatch(act_delete_product(id));
    };

    const handleUpdate = (product1) => {
        // dispatch(act_update_product(product1));
       
        navigate("/editproduct",{state:product1})
    }
    useEffect(() => {
        dispatch(act_get_product());
    }, []);
    return (
        <>
            <div>
                <NavLink className="btn btn-info" to={"/addproduct"}>Add product</NavLink>
                <table className="table">
                    
                    <tbody className=''>
                        <tr>
                            <td colSpan={6} className="fs-3 fw-bold">Quản lí sản phẩm</td>
                        </tr>
                        <tr>
                            <th style={{ width: 20 }}>Mã sản phẩm</th>
                            <th>Sản phẩm</th>
                            <th>Tên</th>
                            <th>Giá tiền</th>
                            <th>Sửa/Xóa</th>
                        </tr>
                        {listProduct.map((pro) => (
                            <tr key={pro.id}>
                                <td className='text-td td-id'>{pro.id}</td>
                                <td>
                                    <img
                                        width={'80 %'}
                                        height={'80 %'}
                                        className="cart-img"
                                        src={pro.image}
                                        alt={pro.name}
                                    />
                                </td>
                                <td className='text-td'>{pro.name}</td>
                                <td className='text-price'>{pro.price}</td>
                                <td className='td-action'>
                                    <button
                                        onClick={() => handleUpdate(pro)}
                                        className="btn btn-warning"
                                    >
                                        Sửa sản phẩm
                                    </button>
                                    &nbsp;
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(pro.id)}
                                    >
                                        Xóa sản phẩm
                                    </button>
                                    &nbsp;
                                </td>
                            </tr>
                        ))}
                    </tbody>
                   

                </table>

            </div>
           


        </>
    )
}
