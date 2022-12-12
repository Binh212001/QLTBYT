import { Avatar, Row } from 'antd';
import { BellFilled } from '@ant-design/icons/lib/icons';
import React from 'react';
import { Dropdown, Space } from 'antd';
import { useDispatch } from 'react-redux';
import { Logout } from '../../reduxs/actions/authAction';

function Header() {
  const items = [
    {
      label: <div onClick={() => handleLogout()}>LogOut</div>,
      key: '1',
    },
  ];

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(Logout());
  };

  return (
    <Row justify='end' align='middle'>
      <BellFilled />

      <div
        style={{
          marginLeft: '10px',
        }}>
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <Avatar>A</Avatar>
            </Space>
          </a>
        </Dropdown>
      </div>
    </Row>
  );
}

export default Header;
