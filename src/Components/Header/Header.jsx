import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../CustomHooks/useAuth';


const Header = () => {
    const { user,handleLogout}=useAuth({})
    console.log(user)
    return (
        
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="pt-3">
                <Container>
                <Navbar.Brand><NavLink style={{textDecoration:"none"}} to="/"><h1><span style={{color:"cyan"}}>Fit</span>Nesia</h1></NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                    <NavLink style={{textDecoration:"none"}} to ="/home"><Nav.Link href="#features">Home</Nav.Link></NavLink>
                    <NavLink style={{textDecoration:"none"}} to ="/service"><Nav.Link href="#features">Services</Nav.Link></NavLink>
                    <NavLink style={{textDecoration:"none"}} to ="/about"><Nav.Link href="#features">About Us</Nav.Link></NavLink>
                    <NavLink style={{textDecoration:"none"}} to ="/contact"><Nav.Link href="#features">Contact Us</Nav.Link></NavLink>
                    <NavLink style={{textDecoration:"none"}} to ="/trainer"><Nav.Link href="#features">Trainer</Nav.Link></NavLink>
                    <NavLink style={{textDecoration:"none"}} to ="/blog"><Nav.Link href="#features">Blog</Nav.Link></NavLink>
                    
                   
                    <Nav.Link href="#pricin"></Nav.Link>
                   
                    </Nav>

                    {user.email? <NavLink onClick={handleLogout} style={{textDecoration:"none"}} to ="/login"><Nav.Link href="#login">Logout</Nav.Link></NavLink>
                    :
                    <NavLink  style={{textDecoration:"none"}} to ="/login"><Nav.Link href="#login">Login</Nav.Link></NavLink>}
                    
                    <Nav.Link href="#deets">signed in as: <span style={{color:"cyan"}}>{user.displayName }</span> </Nav.Link>
                    
                </Navbar.Collapse>
                </Container>
                </Navbar>
        
    );
};

export default Header;