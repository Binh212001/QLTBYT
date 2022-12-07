import { Button } from 'antd';
import React from 'react';
import TableItem from './TableItem';

function TableDynamic({
  row,
  columns,
  tName,
  showForm,
  formUpdate,
  updateRow,
}) {
  return (
    <div
      style={{
        overflowX: 'scroll',
      }}>
      <table
        style={{
          width: '100%',
        }}>
        <thead>
          <tr>
            {columns.map((col) => {
              return <th key={col.key}>{col.title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {row.map((row) => {
            return (
              <TableItem
                key={row._id}
                row={row}
                tName={tName}
                showForm={showForm}
                formUpdate={formUpdate}
                updateRow={updateRow}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableDynamic;
