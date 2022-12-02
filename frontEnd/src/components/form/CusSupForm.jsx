import { Button, Form, Input, InputNumber, Radio } from 'antd';
import React, { useState } from 'react';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

function CusSupForm({ cus }) {
  const [value, setValue] = useState(0);
  const onFinish = (values) => {
    console.log(values);
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <Form
        {...layout}
        name='nest-messages'
        onFinish={onFinish}
        validateMessages={validateMessages}>
        <Form.Item
          name={['user', 'name']}
          label='Name'
          rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'address']}
          label='Address'
          rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'email']}
          label='Email'
          rules={[{ type: 'email', required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item
          name={['user', 'phone']}
          label='Phone'
          rules={[{ type: 'string', min: 0, max: 99, required: true }]}>
          <Input />
        </Form.Item>
        {cus ? (
          <>
            <Form.Item
              name={['user', 'age']}
              label='Age'
              rules={[{ type: 'number', min: 0, max: 99, required: true }]}>
              <InputNumber />
            </Form.Item>
            <Form.Item
              name='gender'
              label='Gender'
              rules={[{ required: true }]}>
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={0}>Male</Radio>
                <Radio value={1}>Female</Radio>
              </Radio.Group>
            </Form.Item>
          </>
        ) : null}

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default CusSupForm;
