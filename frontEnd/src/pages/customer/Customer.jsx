import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cusApi from '../../apis/cusApi';
import DynamicForm from '../../components/form/DynamicForm';
import HeadingPage from '../../components/heading/HeadingPage';
import { fetchListCusStart } from '../../reduxs/actions/cusAction';
const columns = [
  {
    title: 'Id',
    key: 'id',
  },

  {
    title: 'Tên',
    key: 'name',
  },

  {
    title: 'Địa chỉ',
    key: 'address',
  },
  {
    title: 'Số điện thoại',
    key: 'phone',
  },

  {
    title: 'Action',
    key: 'action',
  },
];
function Customer() {
  const [isForm, setIsForm] = useState(false);
  const [formType, setFormType] = useState(true);
  const [selectedRow, setSelectedRow] = useState({
    name: '',
    address: '',
    phone: '',
  });

  const dispatch = useDispatch();
  const { customer } = useSelector((state) => state.customer);

  useEffect(() => {
    dispatch(fetchListCusStart());
  }, [dispatch]);

  const showForm = (type, row) => {
    //Type === true => Form add
    if (type) {
      setFormType(true);
      setIsForm(true);
    } else {
      setSelectedRow(row);
      setFormType(false);
      setIsForm(true);
    }
  };
  const hideForm = () => {
    setIsForm(false);
    dispatch(fetchListCusStart());
  };

  const deleteCus = async (id) => {
    await cusApi.delCus(id);
    dispatch(fetchListCusStart());
  };

  return (
    <div className='wrapper'>
      <div>
        {isForm ? (
          <DynamicForm
            formType={formType}
            hideForm={hideForm}
            page='customer'
            selectedRow={selectedRow}
            setSelectedRow={setSelectedRow}
          />
        ) : null}
      </div>
      <div className='container' style={{ height: '500px', padding: '20px' }}>
        <HeadingPage
          placeholder='Search By Name'
          title_btn='khách hàng'
          showForm={showForm}
          hideForm={hideForm}
        />
        <Row>
          <Col span={24}>
            <div
              style={{
                overflowX: 'scroll',
              }}>
              <table
                className='table'
                style={{
                  width: '100%',
                  height: '350px',
                }}>
                <thead>
                  <tr className='tbrow'>
                    {columns.map((col) => {
                      return <th key={col.key}>{col.title}</th>;
                    })}
                  </tr>
                </thead>
                <tbody>
                  {customer.map((row) => {
                    return (
                      <tr className='tbrow' key={row._id}>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.address}</td>
                        <td>{row.phone}</td>
                        <td>
                          <EditOutlined onClick={() => showForm(false, row)} />
                          <DeleteOutlined onClick={() => deleteCus(row.id)} />
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

export default Customer;
