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
          <CustomLink to={page.home}>Home</CustomLink>
        </Item>
        <Item>
          <CustomLink to={page.equitment}>Equitment</CustomLink>
        </Item>
        <Item>
          <CustomLink to={page.customer}>Customer</CustomLink>
        </Item>
        <Item>
          <CustomLink to={page.supplier}>Supplier</CustomLink>
        </Item>
        <Item>
          <CustomLink to={page.hdn}>Import</CustomLink>
        </Item>
        <Item>
          <CustomLink to={page.hdx}>Export</CustomLink>
        </Item>
      </List>
    </div>
  );
}

export default SideBar;
