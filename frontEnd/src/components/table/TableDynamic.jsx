import { Table } from 'antd';
import React from 'react';

function TableDynamic({ row, columns }) {
  return (
    <div>
      <Table dataSource={row} columns={columns} />
    </div>
  );
}

export default TableDynamic;
