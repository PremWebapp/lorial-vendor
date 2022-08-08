import React from 'react'
import { Tabs, Table, Space } from 'antd'
import { Link } from 'react-router-dom';

function ProductList() {
    const CompletedColumns = [

        {
            title: 'Order Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'User Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <Link to="">{text}</Link>,
        },
        {
            title: 'Date & Time',
            dataIndex: 'code',
            key: 'code',
        },
        {
            title: 'Restro Name',
            dataIndex: 'restro_name',
            key: 'restro_name',
        },
        {
            title: 'Driver Name',
            dataIndex: 'driver_name',
            key: 'driver_name',
        },
        {
            title: 'Item',
            dataIndex: 'item',
            key: 'item',
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
        },

        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="large">
                    <i class="fa fa-motorcycle" aria-hidden="true"></i>

                </Space>
            ),
        },
    ];

  return (
    <div>
                                                <Table dataSource="" columns={CompletedColumns} pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['05', '10', '20', '30'] }} />

    </div>
  )
}

export default ProductList