import React from 'react';
import { Button, Col, Input, Row } from 'antd';
import PropTypes from 'prop-types';
import { SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { findCusByName } from '../../reduxs/actions/cusAction';
import { findSupByName } from '../../reduxs/actions/supAction';
import { findEQMById } from '../../reduxs/actions/equitmentAction';
import { findImportById } from '../../reduxs/actions/importAction';
import { findExportById } from '../../reduxs/actions/exportAction';

function HeadingPage({ title_btn, showForm, hideForm, placeholder }) {
  const [keySearch, setKeySearch] = useState('');
  const dispatch = useDispatch();
  const handleSearch = () => {
    console.log('🚀 ~ file: HeadingPage.jsx:7 ~ HeadingPage ~ title_btn', title_btn);
    if (title_btn === 'khách hàng') {
      dispatch(findCusByName(keySearch));
    } else if (title_btn === 'nhà cung cấp') {
      dispatch(findSupByName(keySearch));
    } else if (title_btn === 'hóa đơn xuất') {
      dispatch(findExportById(keySearch));
    } else if (title_btn === 'hóa đơn nhập') {
      dispatch(findImportById(keySearch));
    } else {
      dispatch(findEQMById(keySearch));
    }
  };

  const handleKeySearch = (e) => {
    setKeySearch(e.target.value);
  };
  return (
    <Row justify={'space-between'} align='middle'>
      <Col span={9} className='p10 '>
        <Row align='middle'>
          <Col span={20}>
            <Input
              placeholder={placeholder}
              value={keySearch}
              onChange={(e) => handleKeySearch(e)}
            />
          </Col>
          <Col span={4}>
            <SearchOutlined onClick={(e) => handleSearch(e)} />
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
            <Button onClick={() => showForm(true)} type='primary'>
              Thêm {title_btn}
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
