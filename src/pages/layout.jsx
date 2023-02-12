import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    HomeOutlined,
    SearchOutlined,
    AuditOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme, Drawer } from 'antd';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./layout.css"
import Region from '../components/region';
import About from '../components/about';
import Map from '../components/map';
const { Header, Sider, Content } = Layout;
const LayoutBase = () => {
    const [collapsed, setCollapsed] = useState(false);
    const isMobile = useSelector(state => state.responsive.isMobile)
    const {
        token: { colorBgContainer, colorDark },
    } = theme.useToken();
    const history = useNavigate()
    const handleMenu = ({ key }) => { history(`/${key}`) }
    const [open, setOpen] = useState(false)

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed} style={{ background: colorDark, display: isMobile ? "none" : "static" }}>
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
                        onClick: () => { !isMobile ? setCollapsed(!collapsed) : setOpen(true) },
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
                    <Drawer
                        title="Basic Drawer"
                        placement={"right"}
                        width={300}
                        closable
                        onClose={() => setOpen(false)}
                        open={open}
                        key={'drawer'}
                    >
                        <div className="logo" />
                        <Menu
                            theme="light"
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
                    </Drawer>
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