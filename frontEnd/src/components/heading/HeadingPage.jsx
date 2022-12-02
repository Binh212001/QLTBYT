import React from 'react';
import { Button, Col, Input, Row } from 'antd';
import PropTypes from 'prop-types';
import { SearchOutlined } from '@ant-design/icons';

function HeadingPage({ title_btn, showForm, hideForm, placeholder }) {
  return (
    <Row justify={'space-between'} align='middle'>
      <Col span={9} className='p10 '>
        <Row align='middle'>
          <Col>
            <Input placeholder={placeholder} />
          </Col>
          <Col className='p6'>
            <SearchOutlined />
          </Col>
        </Row>
      </Col>

      <Col>
        <Row>
          <div className='p10'>
            <Button
              onClick={() => {
                hideForm();
              }}>
              Refresh
            </Button>
          </div>
          <div className='p10'>
            <Button onClick={() => showForm()} type='primary'>
              {title_btn}
            </Button>
          </div>
        </Row>
      </Col>
    </Row>
  );
}

HeadingPage.propTypes = {
  title_btn: PropTypes.string.isRequired,
};

export default HeadingPage;
