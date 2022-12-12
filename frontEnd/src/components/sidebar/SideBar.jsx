import { Avatar, List, Row } from 'antd';
import Item from 'antd/es/list/Item';
import React from 'react';
import CustomLink from '../../costom/CustomLink';
import page from '../../routers/routeConfig';
import Logo from '../../assets/img/Logo.svg';

function SideBar() {
  return (
    <div>
      <Row justify='center'>
        <Avatar src={Logo} alt='logo' />
      </Row>

      <List>
        <Item>
          <CustomLink to={page.home}>Trang chủ</CustomLink>
        </Item>
        <Item>
          <CustomLink to={page.equitment}>Thiết bị</CustomLink>
        </Item>
        <Item>
          <CustomLink to={page.customer}>Khách hàng</CustomLink>
        </Item>
        <Item>
          <CustomLink to={page.supplier}>Nhã cung cấp</CustomLink>
        </Item>
        <Item>
          <CustomLink to={page.hdn}>Nhập hàng</CustomLink>
        </Item>
        <Item>
          <CustomLink to={page.hdx}>Xuất hàng</CustomLink>
        </Item>
      </List>
    </div>
  );
}

export default SideBar;
