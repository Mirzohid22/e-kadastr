import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    HomeOutlined,
    SearchOutlined,
    AuditOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Route, Routes, useNavigate } from 'react-router-dom';
import "./layout.css"
import Region from '../components/region';
import About from '../components/about';
import Map from '../components/map';
const { Header, Sider, Content } = Layout;
const LayoutBase = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, colorDark },
    } = theme.useToken();
    const history = useNavigate()
    const handleMenu = ({ key }) => { history(`/${key}`) }
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed} style={{ background: colorDark }}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['about']}
                    onSelect={handleMenu}
                    items={[
                        {
                            key: 'about',
                            icon: <HomeOutlined />,
                            label: 'МЭП иловаси ҳақида маълумот',
                        },
                        {
                            key: 'map',
                            icon: <SearchOutlined />,
                            label: 'Онлайн харита',
                        },
                        {
                            key: 'region',
                            icon: <AuditOutlined />,
                            label: 'Ҳудудий бирликлар',
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <Routes>
                        <Route path='/*' element={<>clear</>} key="clear" />
                        <Route path='/about' element={<About />} key="about" />
                        <Route path='/map' element={<Map />} key="map" />
                        <Route path='/region' element={<Region />} key="region" />
                        {/* <Route path='/inventoryOutList' element={<>inventoryOutList</>} key="inventoryOutList" /> */}
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    );
};
export default LayoutBase;