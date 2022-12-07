import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import eqmApi from '../../apis/eqmApi';

function EQMForm({ page, formType, selectedRow, hideForm, setSelectedRow }) {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const [file, setFile] = useState();
  const onSubmit = async (data) => {
    if (formType) {
      const fileName = Date.now() + data.file[0].name;
      console.log('🚀 ~ file: EQMForm.jsx:17 ~ onSubmit ~ fileName', fileName);
      const formData = new FormData();
      formData.append('name', fileName);
      formData.append('img', file);

      const newEqm = {
        ...data,
        img: fileName,
      };

      await eqmApi.postEqm(newEqm);
      // await apiConfig.post('/upload', formData, {
      //   headers: {
      //     'Content-Type': 'Multipart/formData',
      //   },
      // });
      hideForm();
    } else {
      const fileName = Date.now() + data.file[0].name;
      console.log('🚀 ~ file: EQMForm.jsx:17 ~ onSubmit ~ fileName', fileName);
      const formData = new FormData();
      formData.append('name', fileName);
      formData.append('img', file);

      const updateEqm = {
        ...data,
        img: fileName,
      };

      await eqmApi.putEqm(updateEqm);
      hideForm();
    }
  };

  const handleChangeEqm = (e) => {
    setSelectedRow({ ...selectedRow, [e.target.name]: [e.target.value] });
  };
  return (
    <form
      style={{
        position: 'fixed',
        background: '#fff',
        padding: '30px',
        width: '500px',
        zIndex: 999,
      }}
      onSubmit={handleSubmit(onSubmit)}>
      <h3>{formType ? 'Add new ' + page : 'Update ' + page}</h3>
      <label>MSP:</label>
      <input
        {...register('id', { required: true })}
        value={selectedRow.id}
        onChange={(e) => handleChangeEqm(e)}
      />
      <label>Name:</label>
      <input
        {...register('name', { required: true })}
        value={selectedRow.name}
        onChange={(e) => handleChangeEqm(e)}
      />
      <br />
      <label>Model:</label>
      <input
        {...register('model', { required: true })}
        value={selectedRow.model}
        onChange={(e) => handleChangeEqm(e)}
      />
      <br />
      <label>Department:</label>
      <input
        {...register('department', { required: true })}
        value={selectedRow.department}
        onChange={(e) => handleChangeEqm(e)}
      />
      <br />
      <label>Country:</label>
      <input
        {...register('country', { required: true })}
        value={selectedRow.country}
        onChange={(e) => handleChangeEqm(e)}
      />
      <br />
      <label>Branch:</label>
      <input
        {...register('branch', { required: true })}
        value={selectedRow.branch}
        onChange={(e) => handleChangeEqm(e)}
      />
      <br />
      <label>Description:</label>
      <textarea
        style={{
          width: '100%',
        }}
        {...register('description', { required: true })}
        value={selectedRow.description}
        onChange={(e) => handleChangeEqm(e)}
      />{' '}
      <br />
      <input
        type='file'
        onChange={(e) => handleChangeEqm(e)}
        {...register('file', { required: true })}
      />
      {errors.file && <span>This field is required</span>}
      <br />
      <br />
      {<button type='submit'>Submit</button>}
      <button onClick={() => hideForm()}>Cancel</button>
    </form>
  );
}

export default EQMForm;
