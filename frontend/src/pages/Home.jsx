import React from "react";
import { Layout, Menu, Breadcrumb, Typography, Row, Col } from "antd";
import {
  PieChartOutlined,
  EditOutlined,
  UserOutlined,
  FileOutlined,
  HomeOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  NavLink,
} from "react-router-dom";
import axios from "axios";
import axiosRetry from "axios-retry";

// Axios Config
axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay });

// Component Library Config
const { Header, Content, Footer, Sider } = Layout;
const { Title, Paragraph, Text } = Typography;
const { SubMenu } = Menu;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarCollapsed: false,
      columnSpan: 12,
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
      <div>
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
              <Menu.Item key="1" icon={<HomeOutlined />}>
                <NavLink to="/">Home</NavLink>
              </Menu.Item>
              <Menu.Item key="2" icon={<UserOutlined />}>
                <NavLink to="/account">Your Account</NavLink>
              </Menu.Item>
              <Menu.Item key="3" icon={<EditOutlined />}>
                <NavLink to="/editor">Rule Editor</NavLink>
              </Menu.Item>
              <Menu.Item key="4" icon={<PieChartOutlined />}>
                <NavLink to="/explorer">Rule Editor</NavLink>
              </Menu.Item>
              <SubMenu key="sub1" icon={<EyeOutlined />} title="View Sections">
                <Menu.Item key="5">Editing Form</Menu.Item>
                <Menu.Item key="6">Property</Menu.Item>
                <Menu.Item key="7">Testing</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Content style={{ margin: "0 16px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                {this.state.path.map((x, key) => (
                  <Breadcrumb.Item key={key}>{x}</Breadcrumb.Item>
                ))}
              </Breadcrumb>
              <Router>
                <Switch>
                  <Layout>
                    <Route path="/">
                      <Header>Home</Header>
                      <Row>
                        <Col span={this.state.columnSpan}>{infoCard()}</Col>
                        <Col span={this.state.columnSpan}>{infoCard()}</Col>
                      </Row>
                    </Route>
                    <Route path="/editor"></Route>
                    <Route path="/explorer"></Route>
                    <Route path="/account"></Route>
                  </Layout>
                </Switch>
              </Router>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </div>
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
