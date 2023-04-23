import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Header extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  task1Click = () => {
    window.location.href = "/task1"
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <Nav className="ml-auto" navbar>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            {user.name}Click Here!
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem onClick={this.task1Click.bind(this)}>
              task1
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>task2</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>task3</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    );
    const guestLinks = (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/task1">
            task1
          </NavLink>
        </NavItem>
      </Nav>
    );
    return (
      <div className="mb-2">
        <Navbar color="white" className="navbar-mern" light expand="md">
          <NavbarBrand href="/">Mern Starter</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            { authLinks }
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Header);
