import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import cusApi from '../../apis/cusApi';
import supApi from '../../apis/supApi';
import { fetchListCusStart } from '../../reduxs/actions/cusAction';
import { fetchListSupStart } from '../../reduxs/actions/supAction';

function DynamicForm({ formType, hideForm, page, selectedRow, setSelectedRow }) {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    if (page === 'customer') {
      if (!selectedRow.id) {
        await cusApi.postCus({
          id: parseInt(Math.random() * 100000),
          ...data,
        });
        dispatch(fetchListCusStart());
        hideForm();
      } else {
        await cusApi.putCus({ id: selectedRow.id, ...data });
        dispatch(fetchListCusStart());
        hideForm();
      }
    } else {
      console.log(page);
      if (!selectedRow.id) {
        await supApi.postSup({
          id: parseInt(Math.random() * 100000),
          ...data,
        });
        dispatch(fetchListSupStart());
        hideForm();
      } else {
        await supApi.putSup({ id: selectedRow.id, ...data });
        dispatch(fetchListSupStart());
        setSelectedRow({
          ...selectedRow,
          name: '',
          address: ' ',
          phone: '',
        });
        hideForm();
      }
    }
  };

  const handleChange = (e) => {
    setSelectedRow({ ...selectedRow, [e.target.name]: [e.target.value] });
  };

  return (
    <form
      style={{
        position: 'fixed',
        background: '#fff',
        padding: '30px',
        width: '500px',
        height: '300px',
        zIndex: 999,
      }}
      onSubmit={handleSubmit(onSubmit)}>
      <h3>{formType ? 'Add new ' + page : 'Update ' + page}</h3>
      <label>Name:</label>
      <input
        {...register('name', { required: true })}
        value={selectedRow.name}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <label>Address:</label>
      <input
        {...register('address', { required: true })}
        value={selectedRow.address}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <label>Phone:</label>
      <input
        type='number'
        {...register('phone', { required: true })}
        value={selectedRow.phone}
        onChange={(e) => handleChange(e)}
      />{' '}
      <br />
      {errors.exampleRequired && <span>This field is required</span>}
      <br />
      <br />
      {<button type='submit'>Submit</button>}
      <button onClick={() => hideForm()}>Cancel</button>
    </form>
  );
}

export default DynamicForm;
