import { Col, Row } from 'antd';
import React from 'react';
import Header from '../header/Header';
import SideBar from '../sidebar/SideBar';

function PrivateLayout({ children }) {
  return (
    <Row justify='center'>
      <Col sm={10} md={4} lg={4}>
        <div className='sidebar'>
          <SideBar />
        </div>
      </Col>
      <Col sm={14} md={20} lg={20} className='content'>
        <div className='header'>
          <Header />
        </div>
        <div>{children}</div>
      </Col>
    </Row>
  );
}

export default PrivateLayout;
