import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import eqmApi from '../../apis/eqmApi';
import EQMForm from '../../components/form/EQMForm';
import HeadingPage from '../../components/heading/HeadingPage';
import { fetchListEqmStart } from '../../reduxs/actions/equitmentAction';

const columns = [
  {
    title: 'Id',
    key: 1,
  },
  {
    title: 'Tên',
    key: 2,
  },
  {
    title: 'Mẫu',
    key: 3,
  },

  {
    title: 'Action',
    key: 4,
  },
];
function Equitment() {
  const [isForm, setIsForm] = useState(false);
  const [formType, setFormType] = useState(true);
  const [selectedRow, setSelectedRow] = useState({
    id: '',
    name: '',
    model: '',
    department: '',
    country: '',
    branch: '',
    description: '',
  });

  const dispatch = useDispatch();
  const { eqm } = useSelector((state) => state.eqm);

  useEffect(() => {
    dispatch(fetchListEqmStart());
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
    setSelectedRow({
      id: '',
      name: '',
      model: '',
      department: '',
      country: '',
      branch: '',
      description: '',
    });
    setIsForm(false);
    dispatch(fetchListEqmStart());
  };

  const deleteEqm = async (id) => {
    await eqmApi.delEqm(id);
    dispatch(fetchListEqmStart());
  };

  return (
    <div className='wrapper'>
      <div>
        {isForm ? (
          <EQMForm
            formType={formType}
            hideForm={hideForm}
            page='equipment'
            selectedRow={selectedRow}
            setSelectedRow={setSelectedRow}
          />
        ) : null}
      </div>

      <div
        className='container'
        style={{
          height: '500px',
          padding: '20px',
        }}>
        <HeadingPage
          title_btn='thiết bị'
          showForm={showForm}
          hideForm={hideForm}
          placeholder='Mã thiết bị'
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
                  {eqm.map((row) => {
                    return (
                      <tr className='tbrow' key={row._id}>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.model}</td>
                        <td>
                          <EditOutlined onClick={() => showForm(false, row)} />
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <DeleteOutlined onClick={() => deleteEqm(row.id)} />
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <Link to={`/equitment/${row._id}`}>
                            <EyeOutlined />
                          </Link>
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

export default Equitment;
