import { Col, Row } from 'antd';
import React, { useState } from 'react';
import CusSupForm from '../../components/form/CusSupForm';
import HeadingPage from '../../components/heading/HeadingPage';
import TableDynamic from '../../components/table/TableDynamic';

function Supplier() {
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
  ];
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
          title_btn='Add New Supplier'
          placeholder='Search By Name'
          showForm={showForm}
          hideForm={hideForm}
        />
        <Row>
          <Col span={isForm ? 24 : 0}>
            <CusSupForm people='SupplierId' />
          </Col>
          <Col span={24}>
            <TableDynamic columns={columns} />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Supplier;
