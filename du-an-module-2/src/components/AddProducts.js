import React, { useEffect, useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { act_create_product } from "../redux/actions";

export default function AddProduct() {
    const [imageUrl, setImageUrl] = useState("");
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const imagesListRef = ref(storage, "uploads/");

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
    const handleAddProduct = () => {
        dispatch(act_create_product({ name: productName, price, image: imageUrl }));
        navigate('/admin')
    };
    
useEffect((getpro)=>{

},[])

    return (
        <div className="text-center">
            <h3 className="admin">Thêm sản phẩm mới</h3>

            <table className="table">
                <thead>
                    <tr>
                        <th>
                            <b>Ảnh sản phẩm: </b>
                        </th>
                        <td>
                            <img width="100" src={imageUrl} $  />
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
                
            </table>
            <button onClick={handleAddProduct} className="btn btn-primary">
                Thêm mới
            </button>
        </div>
    );
}