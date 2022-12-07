import { Button } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import cusApi from '../../apis/cusApi';
import supApi from '../../apis/supApi';
import { fetchListCusStart } from '../../reduxs/actions/cusAction';
import { fetchListSupStart } from '../../reduxs/actions/supAction';

function TableItem({ row, tName, showForm, formUpdate, updateRow }) {
  const dispatch = useDispatch();
  const handleDelete = async (id) => {
    if (tName === 'cus') {
      await cusApi.delCus(id);
      dispatch(fetchListCusStart());
    }
    if (tName === 'sup') {
      await supApi.delSup(id);
      dispatch(fetchListSupStart());
    }
  };

  const handelUpdate = (row) => {
    formUpdate();
    showForm();
    updateRow(row);
  };

  if (tName === 'cus') {
    return (
      <tr key={row._id}>
        <td>{row?.id}</td>
        <td>{row?.name}</td>
        <td>{row?.age}</td>
        <td>{row?.address}</td>
        <td>{row?.phone}</td>
        <td>{row?.email}</td>
        <td>{row?.gender ? 'nam' : 'nu'}</td>
        <td>
          <Button onClick={() => handelUpdate(row)}>Edit</Button>
          <Button onClick={() => handleDelete(row.id)}>Delete</Button>
        </td>
      </tr>
    );
  } else if (tName === 'sup') {
    return (
      <tr key={row._id}>
        <td>{row?.id}</td>
        <td>{row?.name}</td>
        <td>{row?.address}</td>
        <td>{row?.phone}</td>
        <td>{row?.email}</td>
        <td>
          <Button onClick={() => handelUpdate(row)}>Edit</Button>
          <Button onClick={() => handleDelete(row.id)}>Delete</Button>
        </td>
      </tr>
    );
  } else if (tName === 'eqm') {
    return (
      <tr key={row._id}>
        <td>{row?.id}</td>
        <td>{row?.name}</td>
        <td>{row?.model}</td>
        <td>
          <Button>Show</Button>
          <Button onClick={() => handelUpdate(row)}>Edit</Button>
          <Button onClick={() => handleDelete(row.id)}>Delete</Button>
        </td>
      </tr>
    );
  }
}

TableItem.propTypes = {};

export default TableItem;
