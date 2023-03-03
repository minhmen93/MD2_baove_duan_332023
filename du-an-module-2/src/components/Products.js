import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { act_get_product } from '../redux/actions';
import Footer from './Footer';
import Header from './Header';
import Slide from './Slide';

function Products() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(act_get_product());

    }, []);


    const listProduct = useSelector(state => state.products);
    let elemenlistproduct = listProduct.map((product) => {
        return <div key={product.id}>
            <div className="" key={product.id}>
                <div className="card h-100">
                    <img
                        src={product.image}
                        className="cart-img"
                        alt={product.productName}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{product.productName}</h5>
                        <p className="card-text">Giá sản phẩm: {product.price} <b>$</b></p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-warning text-light">Thêm vào giỏ hàng</button>
                    </div>
                </div>
            </div>
        </div >
    })
    return (

        <div>
            <Header />
            <Slide />
            {/* phần sản phẩm hiển thị */}
            <div className="title">
                <h1>
                    <b>SẢN PHẨM <span className='spanPro'>HOT</span></b>
                </h1>
            </div>
            <div className="list-product">
                {elemenlistproduct}

            </div>
            <hr />

            <Footer />
        </div>
    );
}


export default Products;