import React, { Component } from 'react';

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
  } from 'reactstrap';

 class NavBar extends Component {
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

      render() {
      return (
            <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Free the Books!</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                <NavLink href="/login/">Login</NavLink>
                </NavItem>
            
            <NavItem>
                <NavLink href="/profile/">Profile</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="/users/">All Users</NavLink>
                </NavItem>
            
            </Nav>

            </Collapse>
        </Navbar>
      )
      }
  }
  export default NavBar;