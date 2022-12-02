import React from 'react';
import { Badge, Col, Row, Tag, Table, Progress } from 'antd';
import './Home.css';
function GeneralItem({ item }) {
  return (
    <Col sm={24} lg={6} md={12} className='p10'>
      <div className=' item item__boder'>
        <h4>{item.text}</h4>
        <hr />
        <Row className='item_p2'>
          <Col span={12}>This mouth</Col>
          <Col span={12}>
            <Tag color={item.color}> ${item.cash}</Tag>
          </Col>
        </Row>
      </div>
    </Col>
  );
}

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];
function Home() {
  const item = [
    {
      text: 'Import',
      cash: '34000',
      color: 'blue',
    },
    {
      text: 'Export',
      cash: '34000',
      color: 'cyan',
    },

    {
      text: 'Payment',
      cash: '34000',
      color: 'green',
    },
    {
      text: 'Due Balance',
      cash: '34000',
      color: 'red',
    },
  ];
  return (
    <div className='wrapper'>
      <Row>
        {item.map((item, index) => {
          return <GeneralItem item={item} key={index} />;
        })}
      </Row>
      <div className='preview'>
        <Row>
          <Col className='p10' sm={24} md={24} lg={18}>
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={false}
            />
          </Col>
          <Col className='p10 ' sm={24} md={24} lg={6}>
            <div className='preview__cus'>
              <h4> Customer Preview</h4>
              <h4>
                <Progress
                  type='circle'
                  percent={40}
                  strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }}
                />
              </h4>
              <h4>New Customer this Month</h4>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
