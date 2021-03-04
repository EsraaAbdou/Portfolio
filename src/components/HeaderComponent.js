import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faFreeCodeCamp,  } from '@fortawesome/free-brands-svg-icons';

function NavContactItem (props) {
    return (
        <NavItem className={props.margin}>
            <NavLink href={props.link} target="_blank">
                <FontAwesomeIcon icon={props.icon} size="2x" />
            </NavLink>
        </NavItem>
    );
}
function Header () { 
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <header>
            <Navbar color="primary" primary expand="md">
                <div className="container-md">
                    <NavbarBrand href="/">Esraa Abdelhady</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar className="justify-content-end">
                        <Nav className="me-auto" navbar>
                            <NavContactItem link="https://www.linkedin.com/in/esraaabdou/" icon={faLinkedin} margin="mr-3" />
                            <NavContactItem link="https://github.com/EsraaAbdou" icon={faGithub} margin="mr-3" />
                            <NavContactItem link="https://www.freecodecamp.org/esraa_" icon={faFreeCodeCamp} margin="mr-3" />
                            <NavContactItem link="mailto:esraaabdou94@gmail.com" icon={faEnvelope} margin="" />
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </header>    
    );
}

export default Header;
