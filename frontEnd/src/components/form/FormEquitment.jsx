import { Button, Form, Input, InputNumber, Radio } from 'antd';
import { React, useState } from 'react';

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

function FormEquitment() {
  const [file, setFile] = useState();

  const onChangeFile = (e) => {
    setFile(e.target.files[0]);
  };

  const onFinish = (values) => {
    console.log(values);
    console.log('🚀 ~ file: FormEquitment.jsx:21 ~ FormEquitment ~ file', file);
  };

  return (
    <div>
      <Form
        {...layout}
        name='nest-messages'
        onFinish={onFinish}
        validateMessages={validateMessages}>
        <Form.Item
          name={['equitment', 'name']}
          label='Name'
          rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={['equitment', 'department']}
          label='Department'
          rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={['equitment', 'model']}
          label='model'
          rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={['equitment', 'branch']}
          label='branch'
          rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={['equitment', 'country']}
          label='country'
          rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={['equitment', 'size']}
          label='size'
          rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={['equitment', 'quantyty']}
          label='quantyty'
          rules={[{ type: 'number', min: 0, max: 99, required: true }]}>
          <InputNumber />
        </Form.Item>

        <input type='file' onChange={(e) => onChangeFile(e)} />

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default FormEquitment;
