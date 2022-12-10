import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import exportApi from '../../apis/exportApi';

const columns = [
  {
    title: 'Tên thiết bị',
  },
  {
    title: 'Số lượng',
  },
  {
    title: 'Giá',
  },
  {
    title: 'Tổng',
  },
];
function HDXInfomation() {
  const { id, customer } = useParams();
  const [productList, setProductList] = useState([]);
  const [sum, setSum] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const value = await exportApi.fetchInvoiceInformation(parseInt(id));
      let tong = 0;
      value.forEach((e) => {
        tong = tong + e.amount * e.price;
      });
      setSum(tong);
      setProductList(value);
    };

    fetchProducts();
  }, [dispatch, id]);
  return (
    <div className='container' style={{ height: '500px', padding: '20px' }}>
      <p>
        <strong>Customer:</strong>
        {customer}
      </p>
      <table
        className='table'
        style={{
          width: '100%',
        }}>
        <thead>
          <tr className='tbrow'>
            {columns.map((col, index) => {
              return <th key={index}>{col.title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {productList?.map((row, index) => {
            return (
              <tr className='tbrow' key={index}>
                <td>{row?.eqm[0].name}</td>
                <td>{row.amount}</td>
                <td>{row.price}$</td>
                <td>{row.amount * row.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <p>
        <strong>Tong:</strong>
        {sum}$
      </p>
    </div>
  );
}

export default HDXInfomation;
