import {Routes,Route} from 'react-router-dom';
import { DatePicker, Layout } from 'antd';
import { useState } from 'react';

import Home from './containers/Home/Home';
import Products from './containers/Products/Products';
import Items from './containers/Items/Items';
import MenuComponent from './components/MenuComponent/MenuComponent';
import TableComponent from './components/TableComponent/TableComponent';


import './App.css';
import 'antd/dist/antd.css'; 

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout      
    style={{
      minHeight: '100vh',
    }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <MenuComponent />
      </Sider>
    
      <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path ='/products' element={<Products/>} />
        <Route path ='/items' element={<Items/>} />
      </Routes>
    </Layout>
  );
}

export default App;
