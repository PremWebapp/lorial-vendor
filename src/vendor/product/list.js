import React, { useEffect } from 'react'
import { Table, Space } from 'antd'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductFun, removeProductFun } from '../../redux/reducers/productReducer';

function ProductList() {
    const vendorData = useSelector(state => state.login)
    const { productList } = useSelector(state => state.product)

    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(removeProductFun({ data: id, token: vendorData?.token }))
        dispatch(getProductFun({ data: vendorData?.user?.vendor_id, token: vendorData?.token }))
    }
    const CompletedColumns = [
        {
            title: 'Logo',
            dataIndex: 'category_img',
            key: 'category_img',
            render: (text, record) => (
                <span>{(record.category_img ? <span> <img alt='Menu_image' src='images/vendorCategoryImage/category_img-1660807529759-72283329-download.png' style={{ width: "30px", height: "30px", borderRadius: "25px" }} /> </span> : '')}</span>
            )
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            sorter: {
                compare: (a, b) => a.price - b.price,
                multiple: 3,
            },
        },
        {
            title: 'Rating',
            dataIndex: 'rating',
            key: 'rating',
            sorter: {
                compare: (a, b) => a.rating - b.rating,
                multiple: 3,
            },
        },
        {
            title: 'Permitted',
            dataIndex: 'isPermitted',
            key: 'isPermitted',
            render: text => <span>{text == 0 ? 'No' : 'Yes'}</span>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <Link to="/Admin/vahicle-view">
                        <i className="fa fa-eye p-2  rounded-circle " style={{ color: 'white', backgroundColor: '#1b6bcc' }} id={record.id} ></i>
                    </Link>
                    <span className="p-2  rounded-circle "></span><i className="fa fa-trash p-2  rounded-circle pointer" style={{ color: 'red', backgroundColor: '#1b6bcc' }} onClick={() => handleDelete(record.product_id)} id={record.product_id} ></i></span>
            )
        },
    ];

    useEffect(() => {
        dispatch(getProductFun({ data: vendorData?.user?.vendor_id, token: vendorData?.token }))
    }, [])


    return (
        <div className="pe-3">
            <Table dataSource={productList} columns={CompletedColumns} pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['05', '10', '20', '30'] }} />
        </div>
    )
}

export default ProductList