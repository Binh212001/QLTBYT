import React from 'react';
import { Col, Row, Button, Checkbox, Form, Input, Typography } from 'antd';
import Logo from '../../assets/img/Logo.svg';
import './auth.css';
import { useState } from 'react';

function Auth() {
  const [register, setRegister] = useState(false);

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='auth'>
      <Row className='container' align='middle'>
        <Col sm={24} md={12} lg={12}>
          <img src={Logo} alt=' Logi' className='auth__logo' />
          <Typography.Title level={4} className='center'>
            Medicine Equitment Systems
          </Typography.Title>
        </Col>
        <Col sm={24} md={12} lg={12} className='auth__form'>
          <Form
            name='basic'
            labelCol={{ span: 12 }}
            wrapperCol={{ span: 12 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'>
            <Form.Item
              label='Username'
              name='username'
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}>
              <Input />
            </Form.Item>

            <Form.Item
              label='Password'
              name='password'
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}>
              <Input.Password />
            </Form.Item>

            {register ? (
              <Form.Item
                label='ConfirmPassword'
                name='confirmPassword'
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}>
                <Input.Password />
              </Form.Item>
            ) : null}

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>

              <Button
                type='primary'
                danger
                onClick={() => setRegister(!register)}>
                {!register ? 'Register' : 'Cancle'}
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Auth;
