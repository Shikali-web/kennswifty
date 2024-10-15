import React from 'react';
import { Layout, Menu, Button, Typography, Col, Image, Row, Card } from 'antd';
import './App.css'; 
import hero from "./assets/service_1.png";
import { HomeOutlined, InfoCircleOutlined, AppstoreOutlined, PictureOutlined, PhoneOutlined } from '@ant-design/icons';

const App = () => (
  <Layout>
    <Layout.Header className="header">
      <div className="logo">Kennswifty Enterprises</div>
      <div className="menu-container">
        <Menu mode="horizontal" defaultSelectedKeys={['home']}>
          <Menu.Item key="home" icon={<HomeOutlined />}>Home</Menu.Item>
          <Menu.Item key="about" icon={<InfoCircleOutlined />}>About Us</Menu.Item>
          <Menu.Item key="services" icon={<AppstoreOutlined />}>Services</Menu.Item>
          <Menu.Item key="portfolio" icon={<PictureOutlined />}>Portfolio</Menu.Item>
          <Menu.Item key="contact" icon={<PhoneOutlined />}>Contact Us</Menu.Item>
        </Menu>
      </div>
    </Layout.Header>
    <div className="hero-section">
    <div className='hero-left'>
      <Row justify="center" align="middle">
        <Col span={12}>
          <Typography.Title level={1} >Welcome to Kennswifty </Typography.Title>
          <Typography.Paragraph >
            Harnessing Knowledge and Technology for Organizational and Societal Change
          </Typography.Paragraph >
          <Button type="primary" size="large">Get Started Today</Button>
        </Col>
        <Col span={12}>
          <Image src={hero} className='hero'/>
        </Col>
      </Row>
    </div>  
      </div>
      <div className="services-section">
        <h2>Our Services</h2>
      <div className="cards-container">
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card title="Software Development" bordered={false} hoverable>
            <p>We develop custom enterprise software solutions for a range of business solutions for small, medium,
               and large enterprises tailored for your business</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Systems Administration and Support" bordered={false} hoverable>
            <p>We Provide support services for both existing and startup businesses by configuring your domains to leverage on modern enterprise network 
              infrastructure to run your business and manage resources</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Information Systems Consultancy" bordered={false} hoverable>
            <p>We help you identify the right solution for your business to improve efficiency and productivity at reduced costs and resources</p>
          </Card>
        </Col>
      </Row>
      </div>
      </div>
  </Layout>
);

export default App;
