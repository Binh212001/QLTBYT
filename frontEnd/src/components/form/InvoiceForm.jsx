import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, Row } from 'antd';
import React from 'react';
import apiInstance from '../../apis/apiInstance';
import moment from 'moment';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

function InvoiceForm({ people }) {
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
  const onFinish = async (values) => {
    const id = parseInt(Math.random() * 100000);
    const item = values.invoice.map((data) => ({ ...data, exid: id }));
    const newValue = {
      id,
      customerid: parseInt(values.customerid.customerid),
      invoice: item,
      createdAt: moment(new Date()).format('dd/mm/yyyy'),
    };
    console.log('🚀 ~ file: InvoiceForm.jsx:26 ~ onFinish ~ newValue', newValue);
    await apiInstance.post('/export', newValue);
  };

  return (
    <div>
      <Form
        {...layout}
        wrapperCol={24}
        name='nest-messages'
        onFinish={onFinish}
        validateMessages={validateMessages}>
        <Form.Item name={['customerid', 'customerid']} label={people} rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.List name={['invoice']}>
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, index) => (
                <Row className='wrapper' key={index}>
                  <Form.Item
                    {...field}
                    key='0'
                    labelCol={8}
                    label='EquitmentId'
                    name={[field.name, 'eid']}
                    rules={[
                      {
                        required: true,
                        message: 'Missing equitmentid',
                      },
                    ]}>
                    <Input />
                  </Form.Item>
                  <br />
                  <Form.Item
                    {...field}
                    key='1'
                    labelCol={8}
                    label='Price'
                    name={[field.name, 'price']}
                    rules={[
                      {
                        required: true,
                        message: 'Missing price',
                      },
                    ]}>
                    <InputNumber />
                  </Form.Item>
                  <br />
                  <Form.Item
                    {...field}
                    key='2'
                    labelCol={8}
                    label='Quantyty'
                    name={[field.name, 'amount']}
                    rules={[
                      {
                        required: true,
                        message: 'Missing quantyty',
                      },
                    ]}>
                    <InputNumber />
                  </Form.Item>

                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Row>
              ))}

              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 9 }} className='center'>
                <Button type='dashed' onClick={() => add()} icon={<PlusOutlined />}>
                  Add
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 9 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default InvoiceForm;
