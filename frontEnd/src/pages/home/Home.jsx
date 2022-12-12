import React, { useEffect } from 'react';
import { Col, Row, Tag, Table, Progress } from 'antd';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListCusStart } from '../../reduxs/actions/cusAction';
function GeneralItem({ item }) {
  return (
    <Col sm={24} lg={6} md={12} className='p10'>
      <div className=' item item__boder'>
        <h4>{item.text}</h4>
        <hr />
        <Row className='item_p2'>
          <Col span={12}>Tháng này</Col>
          <Col span={12}>
            <Tag color={item.color}> ${item.cash}</Tag>
          </Col>
        </Row>
      </div>
    </Col>
  );
}

const columns = [
  {
    title: 'Mã',
    dataIndex: 'id',
    key: 'id',
  },

  {
    title: 'Họ tên',
    dataIndex: 'name',
    key: 'name',
  },

  {
    title: 'Địa chỉ',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'phone',
    key: 'phone',
  },
];

const item = [
  {
    text: 'Nhập',
    cash: '34000',
    color: 'blue',
  },
  {
    text: 'Xuất',
    cash: '38000',
    color: 'cyan',
  },

  {
    text: 'Trả',
    cash: '45000',
    color: 'green',
  },
  {
    text: 'Số dư',
    cash: '40000',
    color: 'red',
  },
];
function Home() {
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customer.customer);
  useEffect(() => {
    dispatch(fetchListCusStart());
  }, [dispatch]);
  return (
    <div className='wrapper'>
      <Row>
        {item.map((item, index) => {
          return <GeneralItem item={item} key={index} />;
        })}
      </Row>
      <div className='preview'>
        <Row>
          <Col className='p10' sm={24} md={24} lg={18} style={{ overflowY: 'scroll' }}>
            <Table dataSource={customer} rowKey='id' pagination={false} columns={columns} />
          </Col>
          <Col className='p10 ' sm={24} md={24} lg={6}>
            <div className='preview__cus'>
              <h4> Tổng quan khách hàng</h4>
              <h4>
                <Progress
                  type='circle'
                  percent={40}
                  strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }}
                />
              </h4>
              <h4>Khách hàng mới tháng này</h4>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
