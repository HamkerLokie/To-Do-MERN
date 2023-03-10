import React, { Component } from "react";
import Helmet from 'react-helmet';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  Alert,
  Spinner
} from "reactstrap";
import { connect } from "react-redux"; // API to connect component state to redux store
import PropTypes from "prop-types";
import { buttonClicked, isLoading } from "../actions/uiActions";
import { Link } from "react-router-dom";
import { register } from "../actions/authActions";
import "./style.css";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    msg: ""
  };

  static propTypes = {
    buttonClicked: PropTypes.func.isRequired,
    isLoading: PropTypes.func.isRequired,
    button: PropTypes.bool,
    register: PropTypes.func.isRequired,
    status: PropTypes.object.isRequired,
    loading: PropTypes.bool
  };

 
  componentDidMount() {
    this.props.buttonClicked();
  }

  componentDidUpdate(prevProps) {
    const status = this.props.status;

    if (status !== prevProps.status) {
      if (status.id === "REGISTER_FAIL") {
        this.setState({ msg: status.statusMsg });
      } else {
        this.setState({ msg: this.props.status.statusMsg });
      }
    }

    if (status.id === "REGISTER_SUCCESS") {
      setTimeout(() => {
        this.props.history.push("/login");
      }, 2000);
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = this.state;

    const user = { name, email, password };
    this.props.isLoading();
    this.props.register(user);
  };

  render() {
    let className = "divStyle";

 
    let alert;
    if (this.state.msg && this.props.status.respCode >= 400) {
      alert = <Alert color="danger">{this.state.msg}</Alert>;
    } else if (this.state.msg && this.props.status.respCode === 200) {
      alert = (
        <Alert color="success">
          {this.state.msg} <br /> Redirecting to Log In screen
        </Alert>
      );
    }

    if (!this.props.button) {
      className = "formStyle";
    }
    return (
      <div className={className}>
        <Helmet>
          <title>Register</title>
        </Helmet>
        <Card className="listStyle">
          <CardBody>
            <CardTitle>
              <h2>
                <strong>Register</strong>
              </h2>
            </CardTitle>
            <CardSubtitle className="text-muted">
              Already have an account?
              <Link to="/login"> Log In. </Link>
            </CardSubtitle>
            <br />
            {alert}
            <Form onSubmit={this.onSubmit}>
              <FormGroup className="text-center">
                <Label for="name">Username</Label>
                <Input
                  size="lg"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your Username"
                  className="mb-3"
                  onChange={this.onChange}
                  autoComplete="off"
                />

                <Label for="email">E-mail</Label>
                <Input
                  size="lg"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@youremail.com"
                  className="mb-3"
                  onChange={this.onChange}
                />

                <Label for="password">Password</Label>
                <Input
                  size="lg"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your Password"
                  className="mb-3"
                  onChange={this.onChange}
                  autoComplete="off"
                />
                <Button
                  size="lg"
                  color="primary"
                  style={{ marginTop: "2rem" }}
                  block>
                  { this.props.loading ?
                       <span >Registering.. <Spinner size="sm" color="light" /></span> : <span>Register</span>}
                </Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  button: state.ui.button,
  status: state.status,
  loading: state.ui.loading
});

export default connect(
  mapStateToProps,
  { register, isLoading, buttonClicked }
)(Register);
