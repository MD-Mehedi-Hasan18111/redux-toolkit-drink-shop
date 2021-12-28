import React, { useContext } from 'react';
import './Navbar.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { cartContext } from '../../App';
import { useSelector } from 'react-redux';

const NavBar = () => {

    // const [cart, setCart] = useContext(cartContext);
    const cart = useSelector((state) => state.juice.cart);

    const menuStyle = {
        textDecoration: "none",
        color: "#000",
        fontWeight: "500",
        fontSize: "18px",
        marginRight: "15px"
    }

    return (
        <div>
            <div className="nav-area">
                <Navbar className="banner-nav" fixed='top'>
                    <Container>
                        <Navbar.Brand><Link to="/home" style={{textDecoration: "none", color: "red"}}><span style={{fontSize: "30px", color: "#000", fontWeight: "600"}}>D</span>rinks</Link></Navbar.Brand>
                        <Nav className="ms-auto">
                            <Link style={menuStyle} to="/home">Home</Link>
                            <Link style={menuStyle} to="/drinks">Drinks</Link>
                            <Link style={menuStyle} to="/inventory">Inventory</Link>
                            <Link style={menuStyle} to="/review">Cart <i class="fas fa-shopping-cart"></i> {cart.length}</Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default NavBar;