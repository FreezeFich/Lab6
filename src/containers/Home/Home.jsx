import React from 'react'
import {Button} from 'antd'
import { PoweroffOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import { useState } from 'react';
import TableComponent from '../../components/TableComponent/TableComponent';

function Home() {
    const [loadings, setLoadings] = useState([]);

    const enterLoading = (index) => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = true;
        return newLoadings;
      });
      setTimeout(() => {
        setLoadings((prevLoadings) => {
          const newLoadings = [...prevLoadings];
          newLoadings[index] = false;
          return newLoadings;
        });
      }, 6000);
    };
  return (
    <div>
      <TableComponent />
    </div>
  )
}

export default Home