import { DeleteOutlined, EditOutlined, EyeOutlined, ShopOutlined } from '@ant-design/icons';
import { Col, Pagination, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
    title: 'Name',
    key: 2,
  },
  {
    title: 'Model',
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
  const { eqm, count } = useSelector((state) => state.eqm);

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
  };

  const deleteEqm = async (id) => {
    await eqmApi.delEqm(id);
    dispatch(fetchListEqmStart());
  };
  const handleCurrentPage = (page) => {
    dispatch(fetchListEqmStart(page));
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

      <div className='container'>
        <HeadingPage
          title_btn='Add New Equitment'
          showForm={showForm}
          hideForm={hideForm}
          placeholder='Search By Name'
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
                          <DeleteOutlined onClick={() => deleteEqm(row.id)} />
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
          <Pagination
            defaultCurrent={1}
            pageSize={7}
            total={count}
            onChange={(page) => handleCurrentPage(page)}
          />
        </Row>
      </div>
    </div>
  );
}

export default Equitment;
