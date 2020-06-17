import React from "react";
import { Layout, Menu, Breadcrumb, Typography, Row, Col } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  GlobalOutlined,
  EditOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import axios from "axios";
import axiosRetry from "axios-retry";

axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay });
const { Header, Content, Footer, Sider } = Layout;
const { Title, Paragraph, Text } = Typography;
const { SubMenu } = Menu;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarCollapsed: false,
      columnSpan: 8,
      path: ["Rule Editor", "test.rule"],
    };

    this.collapse = this.collapse.bind(this);
  }

  componentDidMount() {
    /* Attempt GET */
    axios.get("/api/get").then((res) => {
      console.log("GETting data...");
      this.setState({ get: true, getData: res.data });
    });
  }

  collapse(newState) {
    this.setState({ sidebarCollapsed: newState });
  }

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.sidebarCollapsed}
          onCollapse={this.collapse}
          theme="light"
        >
          <div className="logo" />
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
          >
            <Menu.Item key="1" icon={<EditOutlined />}>
              Rule Editor
            </Menu.Item>
            <Menu.Item key="2" icon={<PieChartOutlined />}>
              Rule Explorer
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="View Sections">
              <Menu.Item key="3">Editing Form</Menu.Item>
              <Menu.Item key="4">Property</Menu.Item>
              <Menu.Item key="5">Testing</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              {this.state.path.map((x) => (
                <Breadcrumb.Item>{x}</Breadcrumb.Item>
              ))}
            </Breadcrumb>
            <Row>
              <Col span={this.state.columnSpan}>{infoCard()}</Col>
              <Col span={this.state.columnSpan}>{infoCard()}</Col>
              <Col span={this.state.columnSpan}>{infoCard()}</Col>
            </Row>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

function infoCard() {
  return (
    <div
      style={{ margin: 12, minHeight: 600, padding: 12, background: "white" }}
    >
      <Title>Section</Title>
      <Paragraph>Content for testing</Paragraph>
    </div>
  );
}
