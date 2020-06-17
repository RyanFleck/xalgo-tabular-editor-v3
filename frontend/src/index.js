import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import axios from "axios";
import axiosRetry from "axios-retry";

axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay });

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      get: false,
      getData: {},
      post: false,
      postData: {},
    };
  }

  componentDidMount() {
    /* Attempt GET */
    axios.get("/api/get").then((res) => {
      console.log("GETting data...");
      this.setState({ get: true, getData: res.data });
    });

    /* Attempt POST */
    axios.post("/api/post", { message: "Hello POST" }).then((res) => {
      console.log("POSTing data...");
      this.setState({ post: true, postData: res.data });
    });

    /* Attempt another GET */
    axios.get("/api/get/users").then((res) => {
      console.log("GETting data...");
      this.setState({ users: true, userData: res.data });
    });
  }

  render() {
    return (
      <div id="app-wrap">
        <h1>Test</h1>
        <p>
          <b>1.</b> Get data from a <b>GET</b> request:{" "}
          {this.state.get ? "yep, got it" : "nope"}.
        </p>
        {this.state.get ? (
          <pre>{JSON.stringify(this.state.getData, null, 2)}</pre>
        ) : null}
        <p>
          <b>2.</b> Get data from a <b>POST</b> request:{" "}
          {this.state.post ? "yep, success" : "nope"}.
        </p>
        {this.state.post ? (
          <pre>{JSON.stringify(this.state.postData, null, 2)}</pre>
        ) : null}
        <p>
          <b>3.</b> Get data from another <b>GET</b> request:{" "}
          {this.state.users ? "yep, success" : "nope"}.
        </p>
        {this.state.users ? (
          <pre>{JSON.stringify(this.state.userData, null, 2)}</pre>
        ) : null}
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
