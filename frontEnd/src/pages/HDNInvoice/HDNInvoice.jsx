import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import apiInstance from '../../apis/apiInstance';
import InvoiceForm from '../../components/form/InvoiceForm';
import HeadingPage from '../../components/heading/HeadingPage';
import { fetchListInvoiceStart } from '../../reduxs/actions/importAction';

const columns = [
  {
    title: 'Id',

    key: 'id',
  },

  {
    title: 'Nhà cung cấp',

    key: 'supplier',
  },
  {
    title: 'Ngày nhập',

    key: 'createdAt',
  },
  {
    title: 'Action',

    key: 'action',
  },
];

function HDNInvoice() {
  const [isForm, setIsForm] = useState(false);
  const { invoice, count } = useSelector((state) => state.import);
  const showForm = () => {
    setIsForm(true);
  };
  const hideForm = () => {
    setIsForm(false);
    dispatch(fetchListInvoiceStart());
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListInvoiceStart());
  }, [dispatch]);
  const handleDeleteInvoice = async (id) => {
    await apiInstance.delete('/import/' + id);
    dispatch(fetchListInvoiceStart());
  };

  return (
    <div className='wrapper'>
      <div className='container' style={{ height: '500px', padding: '20px' }}>
        <HeadingPage
          title_btn='hóa đơn nhập'
          showForm={showForm}
          hideForm={hideForm}
          placeholder='Mã hóa đơn'
        />
        <Row>
          <Col span={isForm ? 24 : 0}>
            <InvoiceForm people='SupplierId' />
          </Col>
          <Col span={24}>
            <div
              style={{
                overflowX: 'scroll',
              }}>
              <table
                className='table'
                style={{
                  width: '100%',
                }}>
                <thead>
                  <tr className='tbrow'>
                    {columns.map((col) => {
                      return <th key={col.key}>{col.title}</th>;
                    })}
                  </tr>
                </thead>
                <tbody>
                  {invoice.map((row, index) => {
                    return (
                      <tr className='tbrow' key={index}>
                        <td>{row?.id}</td>
                        <td>{row?.supplier[0]?.name}</td>
                        <td>{row?.createdAt}</td>
                        <td>
                          <Link to={`/hdn/information/${row?.supplier[0]?.name}/${row.id}`}>
                            <EyeOutlined />
                          </Link>
                          <DeleteOutlined onClick={() => handleDeleteInvoice(row?.id)} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default HDNInvoice;
