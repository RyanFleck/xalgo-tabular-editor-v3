import React from "react";
import {
  Layout,
  Menu,
  Carousel,
  Typography,
  Spin,
  Row,
  Col,
  Button,
  Space,
} from "antd";
import axios from "axios";
import axiosRetry from "axios-retry";
import { Link, Redirect, redirectTo, navigate } from "@reach/router";
import { AuditOutlined, FilterOutlined } from "@ant-design/icons";

// Axios Config
axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay });

// Component Library Config
const { Header, Content, Footer, Sider } = Layout;
const { Title, Paragraph, Text } = Typography;
const { SubMenu } = Menu;

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Landing",
      get: false,
    };

    this.goToEditor = this.goToEditor.bind(this);
    this.goToQuery = this.goToQuery.bind(this);
  }

  componentDidMount() {
    /* Attempt GET */
    axios.get("/api/get").then((res) => {
      this.setState({ get: true, getData: res.data });
    });
  }

  goToEditor() {
    console.log("Redirecting to editor...");
    navigate("/editor");
  }

  goToQuery() {
    console.log("Redirecting to query...");
    navigate("/query");
  }

  render() {
    return (
      <div>
        <Layout
          className={"mainLayout"}
          style={{
            padding: "1em",
            textAlign: "center",
          }}
        >
          <Title
            size="large"
            style={{ paddingTop: "20vh", paddingBottom: "0" }}
          >
            Xalgorithms
          </Title>
          <Text style={{ paddingTop: "0", paddingBottom: "10vh" }}>
            Integrated Rule Author and User System
          </Text>
          <div>
            <Space>
              <Button
                type="primary"
                size="large"
                icon={<AuditOutlined />}
                onClick={this.goToEditor}
              >
                Write Rules
              </Button>
              <Button
                size="large"
                icon={<FilterOutlined />}
                onClick={this.goToQuery}
              >
                Use Rules
              </Button>
            </Space>
          </div>
        </Layout>
      </div>
    );
  }
}
