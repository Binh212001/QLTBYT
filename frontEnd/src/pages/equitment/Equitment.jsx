import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeadingPage from '../../components/heading/HeadingPage';
import TableDynamic from '../../components/table/TableDynamic';
import { fetchListEqmStart } from '../../reduxs/actions/equitmentAction';

const columns = [
  {
    title: 'Id',
    key: 'id',
  },
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Model',
    key: 'model',
  },

  {
    title: 'Action',
    key: 'action',
  },
];
function Equitment() {
  const [isForm, setIsForm] = useState(false);

  const dispatch = useDispatch();
  const { eqm, count } = useSelector((state) => state.eqm);

  useEffect(() => {
    dispatch(fetchListEqmStart());
  }, [dispatch]);
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
          <Col span={24}>
            <TableDynamic
              columns={columns}
              row={eqm}
              count={count}
              tName='eqm'
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Equitment;
