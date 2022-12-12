import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import apiInstance from '../../apis/apiInstance';
import eqmApi from '../../apis/eqmApi';

function EqmInfomation() {
  const { id } = useParams();
  const [equiqment, setEquiqment] = useState();
  console.log('🚀 ~ file: EqmInfomation.jsx:10 ~ EqmInfomation ~ equiqment', equiqment);

  useEffect(() => {
    const getById = async (id) => {
      const eqm = await eqmApi.fetchEqmById(id);
      setEquiqment(eqm);
    };
    getById(id);
  }, [id]);

  return (
    <Row className='wrapper' gutter={[20, 20]}>
      <Col sm={24} md={12} lg={12}>
        <img src={`http://localhost:4000/img/${equiqment?.img}`} alt='' width={'100%'} />
      </Col>
      <Col sm={24} md={12} lg={12}>
        <p>
          <strong>Mã thiết bị:</strong>
          {equiqment?.id}
        </p>
        <p>
          <strong>Tên thiết bị:</strong>
          {equiqment?.name}
        </p>
        <p>
          <strong>Mẫu:</strong>
          {equiqment?.model}
        </p>
        <p>
          <strong>Bộ phận:</strong>
          {equiqment?.department}
        </p>
        <p>
          <strong>Hãng sản xuất:</strong>
          {equiqment?.branch}
        </p>
        <p>
          <strong>Nước:</strong>
          {equiqment?.country}
        </p>
        <p>
          <strong>Quantyty:</strong>
          {equiqment?.quantyty}
        </p>

        <p style={{ whiteSpace: 'pre-line' }}>
          <strong>Mô tả:</strong>
          <br />
          {equiqment?.description}
        </p>
      </Col>
    </Row>
  );
}

export default EqmInfomation;
