import React, { useState } from 'react';
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
  DropdownItem,
  NavbarText
} from 'reactstrap';
// Style Object to change color of NavBrand (homeLink)
const navBrandStyles = {
  color: 'rgb(217, 217, 217)'
}
// Style Object to change color of NavItems (navBarHeadingText)
const navItemStyles = {
  color: 'rgb(242, 242, 242)'
}

const CustomNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

    return (<>

      <Navbar color="dark" light expand="md">
        <NavbarBrand className ="homeLink" style={navBrandStyles} href="/">Christopher Gabb</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="navBarHeadingText" style={navItemStyles} target="_blank" href="https://github.com/chrisgabb">GitHub</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navBarHeadingText" style={navItemStyles}href="/portfolio">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navBarHeadingText"  target="_blank" style={navItemStyles}href="https://drive.google.com/file/d/1ScKhZWrX7iaBbDlLXDMcnAcUthVXsd1v/view?usp=sharing">Resume</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navBarHeadingText" style={navItemStyles}href="/contactme">Contact Me</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>)
  }

  export default CustomNavBar