import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback
} from "reactstrap";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="container h-100">
        
      </div>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
