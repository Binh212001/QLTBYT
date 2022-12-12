import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, Row } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import apiInstance from '../../apis/apiInstance';
import cusApi from '../../apis/cusApi';
import supApi from '../../apis/supApi';
import { fetchListInvoiceStart as fetchListImport } from '../../reduxs/actions/importAction';
import { fetchListInvoiceStart as fetchListExport } from '../../reduxs/actions/exportAction';

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
function InvoiceForm({ people }) {
  const [errId, setErrId] = useState('');

  const dispatch = useDispatch();
  const onFinish = async (values) => {
    if (people === 'SupplierId') {
      const supplier = await supApi.fetchSupById(values.supplierid.supplierid);

      if (supplier.length > 0) {
        setErrId('');
        const id = parseInt(Math.random() * 100000);
        const item = values.invoice.map((data) => ({ ...data, imid: id }));
        const newValue = {
          id,
          supplierid: parseInt(values.supplierid.supplierid),
          invoice: item,
          createdAt: moment(new Date()).format('dd/mm/yyyy'),
        };
        await apiInstance.post('/import', newValue);
        dispatch(fetchListImport());
      } else {
        setErrId('Mã nhà cung cấp không hợp lệ');
      }
    } else {
      const customer = await cusApi.findById(values.customerid.customerid);
      console.log('🚀 ~ file: InvoiceForm.jsx:47 ~ onFinish ~ customer', customer);
      if (customer.length) {
        setErrId('');

        const id = parseInt(Math.random() * 100000);
        const item = values.invoice.map((data) => ({ ...data, exid: id }));
        const newValue = {
          id,
          customerid: parseInt(values.customerid.customerid),
          invoice: item,
          createdAt: moment(new Date()).format('dd/mm/yyyy'),
        };
        await apiInstance.post('/export', newValue);
        dispatch(fetchListExport());
      } else {
        setErrId('Mã khách hàng không hợp lệ');
      }
    }
  };

  return (
    <div>
      <Form
        {...layout}
        wrapperCol={24}
        name='nest-messages'
        onFinish={onFinish}
        validateMessages={validateMessages}>
        <Form.Item
          name={[
            people === 'SupplierId' ? 'supplierid' : 'customerid',
            people === 'SupplierId' ? 'supplierid' : 'customerid',
          ]}
          label={people}
          rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <small>{errId}</small>

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
