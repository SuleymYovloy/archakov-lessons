import React from "react";
import {Link} from 'react-router-dom';
import { Nav } from "react-bootstrap";
import {useLocation} from 'react-router-dom';

export const Header = () => {
    let {pathname} = useLocation();

    return (
        <div className="header">
            <Link to='/home'><h2>React - Блог</h2></Link>
            <Nav variant="pills">
                <Nav.Item>
                    <Nav.Link active={pathname === '/home'} to="/home" as={Link}>Главная</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link active={pathname === '/about'} to="/about" as={Link}>Обо мне</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link active={pathname === '/login'} to="/login" as={Link}>Войти</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};
