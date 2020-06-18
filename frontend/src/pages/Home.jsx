import React from "react";
import axios from "axios";
import axiosRetry from "axios-retry";

// Reach Router
import { Link, Router, Location } from "@reach/router";

// Ant Design Library
import { Layout, Menu, Breadcrumb, Typography, Row, Col } from "antd";
import {
  HomeOutlined,
  ShareAltOutlined,
  FilterOutlined,
  AuditOutlined,
  EyeOutlined,
  UserOutlined,
} from "@ant-design/icons";

// Pages
import Browser from "./Browser";
import Editor from "./Editor";
import Landing from "./Landing";
import LandingTwo from "./LandingTwo";
import QueryRule from "./QueryRule";
import Account from "./Account";

// Axios Config
axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay });

// Component Library Config
const { Header, Content, Footer, Sider } = Layout;
const { Title, Paragraph, Text } = Typography;
const { SubMenu } = Menu;

// Page information
const pages = {
  home: {
    navName: "Xalgorithms Tabular Rule Composition System",
    headerName: "Home",
    path: "/",
  },

  browser: {
    navName: "Browser",
    headerName: "Rule Browser",
    pageTitleName: "Browser",
    path: "/browser",
  },

  editor: {
    navName: "Editor",
    headerName: "Rule Editor",
    path: "/editor",
  },

  query: {
    navName: "Query",
    headerName: "Query Applicable Rules",
    path: "/query",
  },

  account: {
    navName: "Account",
    headerName: "User Account Information",
    path: "/account",
  },
};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      get: false,
      getData: {},
    };
  }

  componentDidMount() {
    /* Attempt GET */
    axios.get("/api/get").then((res) => {
      console.log("GETting data...");
      this.setState({ get: true, getData: res.data });
    });
  }

  render() {
    return (
      <div id="app-wrap">
        <Location>
          {({ location }) => (
            <Layout style={{ minHeight: "100vh" }}>
              <Header className="header">
                <Menu
                  theme="dark"
                  mode="horizontal"
                  selectedKeys={[location.pathname]}
                >
                  <Menu.Item key={pages.home.path}>
                    <Link to={pages.home.path} />
                    {pages.home.navName}
                  </Menu.Item>
                  <Menu.Item key={pages.browser.path} icon={<EyeOutlined />}>
                    <Link to={pages.browser.path} />
                    {pages.browser.navName}
                  </Menu.Item>
                  <Menu.Item key={pages.editor.path} icon={<AuditOutlined />}>
                    <Link to={pages.editor.path} />
                    {pages.editor.navName}
                  </Menu.Item>
                  <Menu.Item key={pages.query.path} icon={<FilterOutlined />}>
                    <Link to={pages.query.path} />
                    {pages.query.navName}
                  </Menu.Item>
                  <Menu.Item key={pages.account.path} icon={<UserOutlined />}>
                    <Link to={pages.account.path} />
                    {pages.account.navName}
                  </Menu.Item>
                </Menu>
              </Header>
              <Layout>
                <Content>
                  <Router>
                    <Landing path={pages.home.path} />
                    <LandingTwo path="/use" />
                    <Browser path={pages.browser.path} />
                    <Editor path={pages.editor.path} />
                    <QueryRule path={pages.query.path} />
                    <Account path={pages.account.path} />
                  </Router>
                </Content>
              </Layout>
            </Layout>
          )}
        </Location>
      </div>
    );
  }
}
