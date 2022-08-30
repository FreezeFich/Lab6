import React, {useState, useEffect} from 'react';
import { Button, Table, Modal } from 'antd';
import axios from 'axios';
import './Home.scss';

export const BASE_URL = 'https://api.sampleapis.com';

function Home() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  

  useEffect(() => {
    fetchGames();
  }, [])

  const fetchGames = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${BASE_URL}/cartoons/cartoons2D`);
      setData(response.data)
      setLoading(false)
    } catch (error) {
      console.error(error);
      setLoading(false)
    }
  }
  
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id - b.id,
      sortDirections: ['descend'],
      width: 20,
    },
    {
      title: 'Name of The Cartoon',
      dataIndex: 'title',
      key: 'title',
      sorter: (a, b) => (a.title.toLowerCase() > b.title.toLowerCase() ? 1 : (a.title === b.title ? 0 : -1)),
      width: 500,
    },
    {
      title: 'Year of release',
      dataIndex: 'year',
      key: 'year',
      sorter: (a, b) => a.year - b.year,
    },
    {
      title: 'Number of Episodes',
      dataIndex: 'episodes',
      key: 'episodes',
      sorter: (a, b) => a.episodes - b.episodes,
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
      filters: [
        {
          text: 'TV-PG',
          value: 'TV-PG',
        },
        {
          text: 'TV-MA',
          value: 'TV-MA',
        },
        {
          text: 'TV-Y7',
          value: 'TV-Y7',
        },
        {
          text: 'TV-G',
          value: 'TV-G',
        }
        ],
      onFilter: (value, record) => record.rating.indexOf(value) === 0,
    }
  ];

  return (
    <div className="home-container">
      <h1>Home</h1>
      <Table 
        dataSource={data} 
        columns={columns} 
        loading={loading}
        size={'small'}
        width="100%"
        className="table"
        // pagination={false}
      />
    </div>
  )
}

export default Home
