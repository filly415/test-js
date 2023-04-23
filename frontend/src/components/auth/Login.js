import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

import {
  Card,
  CardHeader,
  CardBody,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  FormFeedback,
  Input
} from "reactstrap";

const Login = ({ loginUser, auth, errors, history }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  useEffect(() => {
    if (auth.isAuthenticated) {
      history.push("/dashboard");
    }
  }, [auth.isAuthenticated, history]);

  const onSubmit = e => {
    e.preventDefault();

    const userData = {
      email,
      password
    };

    loginUser(userData);
  };

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="container h-100">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Card>
            <CardHeader>Login</CardHeader>
            <CardBody>
              {/* Form Starts Here */}
              <Form onSubmit={onSubmit}>
                <FormGroup row>
                  <Label className="text-md-right" for="email" sm={4}>
                    Email
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="email"
                      invalid={errors.email}
                      name="email"
                      id="email"
                      value={email}
                      onChange={onChange}
                    />
                    <FormFeedback>{errors.email}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label className="text-md-right" for="password" sm={4}>
                    Password
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="password"
                      invalid={errors.password}
                      name="password"
                      id="password"
                      value={password}
                      onChange={onChange}
                    />
                    <FormFeedback>{errors.password}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup check row>
                  <Col sm={{ size: 10, offset: 4 }}>
                    <Button color="primary">Login</Button>
                  </Col>
                </FormGroup>
              </Form>

              {/* Form Ends Here */}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);