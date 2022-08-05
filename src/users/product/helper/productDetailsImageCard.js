import { Image } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { ShoppingCartOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { addItemToCart } from '../../../redux/reducers/cartReducer';

function ProductDetailsImageCard() {
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false);
    const selectedViewItem = useSelector(state => state.cart?.seletedItem)
    return (
        <div>
            <Image
                preview={{
                    visible: false,
                }}
                width={400}
                src={selectedViewItem?.image}
                onClick={() => setVisible(true)}
            />
            <div
                style={{
                    display: 'none',
                }}
            >
                <Image.PreviewGroup
                    preview={{
                        visible,
                        onVisibleChange: (vis) => setVisible(vis),
                    }}
                >
                    <Image src={selectedViewItem?.image} />
                </Image.PreviewGroup>
            </div>
            <div className='d-flex gap-5 py-2'>
                <Link to='/product/cart' className='nav-link'>
                    <Button size="large" type="primary" style={{ background: "#ff9f00", borderColor: "yellow" }} onClick={() => dispatch(addItemToCart(selectedViewItem))} icon={<ShoppingCartOutlined />}>Add to Cart</Button>
                </Link>
                <Button type="primary" size="large" style={{ background: "#fb641b", borderColor: "yellow" }} icon={<ShoppingOutlined />}>Buy Item</Button>
            </div>
        </div>
    )
}

export default ProductDetailsImageCard