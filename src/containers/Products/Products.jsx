import { PoweroffOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import React, { useState } from 'react';
import "./Product.scss"

function Products() {
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
    <div className="product-wrapper">

      <header>
        <h1>Are you looking for About Us text examples?</h1>
      </header>
      <div>
        About Us Text Examples are all over the Internet (thank you Google), but few go into why it’s a good design beyond just the copy. Here’s the thing about copy, it’s only good if someone reads it. Likewise, a professional design only creates a successful About Us page, if it showcases good content.
        In this video I discuss 3 websites that are handling their about me pages correctly. And just for kicks, I threw in one very prominent website that, well, isn’t. Today, you’ll learn why it’s important that your About Us page be laid out like a landing page. Also we’ll talk about why items like the Backstory, Charity focuses, etc, need to be linked out to their own pages.
      </div>
      <footer>
      <Space
        style={{
          width: '100%',
        }}
      >
        <Button type="primary" loading>
          You've been Trolled
        </Button>
        <Button type="primary" size="small" loading>
          You've been Trolled
        </Button>
        <Button type="primary" icon={<PoweroffOutlined />} loading />
      </Space>
      <Button type="primary" size="small" loading>
        Yes, you've probably been told
        </Button>
        <Button type="primary" loading>
        Don't reply to this guy
        </Button>
      <Button type="primary" size="small" loading>
      He's just trying to get a rise
        </Button>
        <Button type="primary" loading>
        Out of you, yes, it's true
        </Button>
      </footer>
    </div>
    
  )
}

export default Products
