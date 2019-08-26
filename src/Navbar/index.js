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
  
      // this.toggle = this.toggle.bind(this);
      state = {
        // isOpen: false
        username: '',
        email: '',
        password: '',
        photo: '',
      };
    // toggle() {
    //   this.setState({
    //     isOpen: !this.state.isOpen
    //   });
    // }

      render() {
        console.log(this.props.nav, "this.props on nav")
        // this.setState({
        //   ...this.
        // })
        return (
              <Navbar color="light" light expand="md">
              <NavbarBrand href="/">Free the Books!</NavbarBrand>
              <Nav className="ml-auto" navbar>
                  <NavItem>
                  <NavLink href="/login/">Login</NavLink>
                  </NavItem>
              
              <NavItem>
                  <NavLink href={`/profile/${this.props.nav.id}`}>Profile</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink href="/users/">All Users</NavLink>
              </NavItem>
              
              </Nav>
          </Navbar>
      )}
  }

  export default NavBar;