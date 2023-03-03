import React, { useEffect, useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {  act_update_product } from "../redux/actions";
import AddProduct from "./AddProducts";

export default function EditProduct() {
    const [imageUrl, setImageUrl] = useState("");
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");


    const updatePro = useLocation().state

    const dispatch = useDispatch();
    const navigate = useNavigate();

   useEffect(()=>{
    setImageUrl(updatePro.image)
    setProductName(updatePro.name)
    setPrice(updatePro.price)
   },updatePro)

    // Tạo storage lưu trữ từ dịch vụ của firebase
    const uploadImage = (e) => {
        let imageUpload = e.target.files[0];
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrl(url);
            });
        });
    };
    const handleUpdateProduct = () => {
        dispatch(
            act_update_product({
                id: updatePro.id,
                name: productName,
                price,
                image: imageUrl,
            })
        );
        navigate("/admin");
    };
  
    return (
        <div>
            <h3 className="admin">Chỉnh sửa sản phẩm</h3>

            <table className="table">
                <thead>
                    <tr>
                        <th>
                            <b>Ảnh sản phẩm: </b>
                        </th>
                        <td>
                            <img width="100" src={imageUrl} alt="new-product" />
                            <input type="file" onChange={uploadImage} />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <b>Tên sản phẩm: </b>
                        </th>
                        <td>
                            <input
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                type="text"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <b>Giá sản phẩm: </b>
                        </th>
                        <td>
                            <input
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                type="number"
                            />
                        </td>
                    </tr>
                </thead>
                <button className="btn btn-primary" onClick={handleUpdateProduct}>
                    Cập nhật
                </button>
            </table>
            
             
        </div>

    );
}