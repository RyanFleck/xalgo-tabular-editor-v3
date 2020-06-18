import React from "react";
import { Layout, Menu, Breadcrumb, Typography, Row, Col } from "antd";
import axios from "axios";
import axiosRetry from "axios-retry";

// Axios Config
axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay });

// Component Library Config
const { Header, Content, Footer, Sider } = Layout;
const { Title, Paragraph, Text } = Typography;
const { SubMenu } = Menu;

export default class Browser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Browser",
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
      <div>
        <Title>{this.state.title}</Title>
      </div>
    );
  }
}
