import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, Menu } from "antd";
import { Home } from "./component/home";
import { Product } from "./component/product";
const { Content, Footer, Sider } = Layout;
export const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };
  const link = (path) => (window.location.pathname = path);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo">
          <span>H</span> <hr /> <span>W</span>
        </div>
        <Menu theme="dark" defaultSelectedKeys={["home"]} mode="inline">
          <Menu.Item key="home" icon={<i className="fas fa-home" />} onClick={() => link("/")}>
            Главное
          </Menu.Item>
          <Menu.Item key="phone" icon={<i className="fas fa-mobile-alt" />} onClick={() => link("/phone")}>
            Телефоны
          </Menu.Item>
          <Menu.Item key="component" icon={<i className="fas fa-server" />} onClick={() => link("/component")}>
            Комплектующие
          </Menu.Item>
          <Menu.Item key="television" icon={<i className="fas fa-tv" />} onClick={() => link("/television")}>
            Телевизоры
          </Menu.Item>
          <Menu.Item key="appliances" icon={<i className="fas fa-server"></i>} onClick={() => link("/appliances")}>
            Бытовая Техника
          </Menu.Item>
          <Menu.Item key="camera" icon={<i className="fas fa-camera" />} onClick={() => link("/camera")}>
            Фото
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Product />} />
              </Routes>
            </BrowserRouter>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Harble world ©2021 Created by HarbleTM</Footer>
      </Layout>
    </Layout>
  );
};
