import { Button, Col, Form, Input, Row, Typography } from 'antd';
import React, { useState } from 'react';
import Logo from '../../assets/img/Logo.svg';
import './auth.css';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginStart, RegisterStart } from '../../reduxs/actions/authAction';

function Auth() {
  const [register, setRegister] = useState(false);
  const dispatch = useDispatch();
  const nagitive = useNavigate();
  const onFinish = async (values) => {
    if (!register) {
      await dispatch(LoginStart(values));
      nagitive('/');
    } else {
      await dispatch(
        RegisterStart({
          username: values.username,
          password: values.password,
        }),
      );
      setRegister(false);
    }
  };
  const onFinishFailed = (errorInfo) => {};
  return (
    <div className='auth'>
      <Row className='container' align='middle'>
        <Col sm={24} md={12} lg={12}>
          <img src={Logo} alt=' Logi' className='auth__logo' />
          <Typography.Title level={4} className='center'>
            Phần Mềm quản lý thiết bị Y tế
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
              label='Tài khoản'
              name='username'
              rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input />
            </Form.Item>

            <Form.Item
              name='password'
              label='Mật khauả'
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              hasFeedback>
              <Input.Password />
            </Form.Item>

            {register ? (
              <>
                <Form.Item
                  name='confirm'
                  label='Confirm Password'
                  dependencies={['password']}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error('The two passwords that you entered do not match!'),
                        );
                      },
                    }),
                  ]}>
                  <Input.Password />
                </Form.Item>
              </>
            ) : null}

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>

              <Button type='primary' danger onClick={() => setRegister(!register)}>
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
