import { Col, Row } from 'antd';
import React, { useState } from 'react';
import CusSupForm from '../../components/form/CusSupForm';
import HeadingPage from '../../components/heading/HeadingPage';
import TableDynamic from '../../components/table/TableDynamic';
const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },

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
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  },
];
function Customer() {
  const [isForm, setIsForm] = useState(false);

  const showForm = () => {
    setIsForm(true);
  };
  const hideForm = () => {
    setIsForm(false);
  };
  return (
    <div className='wrapper'>
      <div className='container'>
        <HeadingPage
          placeholder='Search By Name'
          title_btn='Add New Customer'
          showForm={showForm}
          hideForm={hideForm}
        />
        <Row>
          <Col span={isForm ? 24 : 0}>
            <CusSupForm cus={true} />
          </Col>
          <Col span={24}>
            <TableDynamic columns={columns} />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Customer;
