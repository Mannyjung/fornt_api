import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'; //import ตัวช่วยมาจาก reactstrap
const Menu = (props) => { 
  const [isOpen, setIsOpen] = useState(false); //มาจาก reactstrap 

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" expand="md">
        <NavbarBrand href="/">SE Store</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/home/">Product List</NavLink> {/*ลิงก์ไปที่หน้า home /*/}
            </NavItem>
            <NavItem>
              <NavLink href="/add">Add New Product</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;
