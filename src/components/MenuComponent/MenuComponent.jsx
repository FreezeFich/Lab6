  import { Button, Menu, Layout } from 'antd';
  import React, { useState } from 'react';
  import {useNavigate} from "react-router-dom"

  import "./Menu.scss"
  
  const MenuComponent = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()
    const items =[
        {label:'Home', key: '/'},  
        {label:'Products', key: '/products'},  
        {label:'Items', key:'/items'},  
  ]
  const handleMenuClick = (item) =>{
    console.log("click",item)
    navigate(item.key)
  }
  return (
    <Menu
      defaultSelectedKeys={['/']}
      //   defaultOpenKeys={['sub1']}
      mode="inline"
      theme="dark"
        //   inlineCollapsed={collapsed}
      items={items}
      className="MenuContainer"
      onClick={handleMenuClick}
        />
    );
  };
  
  export default MenuComponent;