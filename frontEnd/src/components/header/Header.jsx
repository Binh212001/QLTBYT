import { Avatar, Row } from 'antd';
import { BellFilled } from '@ant-design/icons/lib/icons';
import React from 'react';
import { Dropdown, Space } from 'antd';

function Header() {
  const items = [
    {
      label: <div onClick={() => handleLogout()}>LogOut</div>,
      key: '1',
    },
  ];

  const handleLogout = () => {
    console.log(
      '🚀 ~ file: Header.jsx ~ line 29 ~ handleLogout ~ handleLogout',
      handleLogout,
    );
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
