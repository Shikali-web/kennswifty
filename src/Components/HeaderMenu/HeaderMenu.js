import React from 'react';
import { Menu } from 'antd';
import './HeaderMenu.css'; // Import the CSS file for styling

const HeaderMenu = () => {
  return (
    <div className="header-container">
      <Menu mode="horizontal" className="menu-right">
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="about">About Us</Menu.Item>
        <Menu.Item key="Our Services">Our Services</Menu.Item>
        <Menu.Item key="Learning Center">Learning Center</Menu.Item>
        
      </Menu>
      <div className="logo">KCGL</div>
    </div>
  );
};

export default HeaderMenu;
