import { Col, Row } from 'antd';
import React, { useState } from 'react';
import InvoiceForm from '../../components/form/InvoiceForm';
import HeadingPage from '../../components/heading/HeadingPage';
import TableDynamic from '../../components/table/TableDynamic';

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },

  {
    title: 'Supplier',
    dataIndex: 'supplier',
    key: 'supplier',
  },
  {
    title: 'CreatedAt',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
];
function HDXInvoice() {
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
          title_btn='Add New Invoice'
          showForm={showForm}
          hideForm={hideForm}
          placeholder='Search By Id'
        />
        <Row>
          <Col span={isForm ? 24 : 0}>
            <InvoiceForm people='CustomerId' />
          </Col>
          <Col span={24}>
            <TableDynamic columns={columns} />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default HDXInvoice;
