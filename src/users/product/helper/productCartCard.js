import React from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from 'react-redux'
import { decrementCartProductCount, incrementCartProductCount, removeItemFromCart  } from '../../../redux/reducers/cartReducer';

function ProductCartCard({ item , index}) {
    const dispatch = useDispatch()
    return (
        <div key={item.id} className="card-price mb-3 card-radius border shadow">
            <div className="card-body  p-2">
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                        <div className="product-image"><img src={item.image} className="img-fluid rounded-3 " alt="Cotton T-shirt" /></div>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                        <p className="lead fw-normal mb-2" >{item.title}</p>
                        <p><span className="text-muted">Size: </span>M<span className="text-muted">Color: </span>Grey</p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                        <button disabled={item.incriCount === 1 ? true : false} className="btn btn-link text-black px-2" onClick={() => dispatch(decrementCartProductCount(index))}>
                            <FaMinus />
                        </button>

                        <input id="form1" min="0" name="quantity" value={item.quantity} type="text"
                            className="form-control form-control-sm text-center" />
                        <button className="btn btn-link px-2 text-dark" onClick={() => dispatch(incrementCartProductCount(index))}>
                            <FaPlus />
                        </button>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        <h5 className="mb-0" >${item.price}</h5>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        <button className="border-0 bg-white text-danger" onClick={() => dispatch(removeItemFromCart(item?.id))}><AiFillDelete fontSize={30} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCartCard