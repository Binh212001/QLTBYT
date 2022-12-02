import { Col, Row } from 'antd';
import React, { useState } from 'react';
import { MoreOutlined } from '@ant-design/icons';
import HeadingPage from '../../components/heading/HeadingPage';
import TableDynamic from '../../components/table/TableDynamic';
import FormEquitment from '../../components/form/FormEquitment';

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
    title: 'Department',
    dataIndex: 'department',
    key: 'department',
  },

  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
  },
];
function Equitment() {
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
          title_btn='Add New Equitment'
          showForm={showForm}
          hideForm={hideForm}
          placeholder='Search By Name'
        />

        <Row>
          <Col span={isForm ? 24 : 0}>
            <FormEquitment />
          </Col>
          <Col span={24}>
            <TableDynamic columns={columns} />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Equitment;
