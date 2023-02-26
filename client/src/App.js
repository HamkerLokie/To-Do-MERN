import React, { Component } from "react";


import MainNavbar from "./components/MainNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "react-redux";
import { isAuth } from "./actions/authActions";
import MainRouter from "./components/Routing/MainRouter";
import store from "./store";
import { Helmet } from "react-helmet";
import Footer from "./components/Footer";

class App extends Component {
  componentDidMount() {
    store.dispatch(isAuth());
  }
  render() {
    return (
      <Provider store={store}>
        <Helmet titleTemplate="TodoList | %s " defaultTitle="Todo-MERN">
          <meta
            name="description"
            content="A ToDo List App"
          />
        </Helmet>
        <MainNavbar />
        <MainRouter />
      </Provider>
    );
  }
}

export default App;
