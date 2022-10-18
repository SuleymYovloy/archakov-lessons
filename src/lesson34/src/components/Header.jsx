import React from "react";
import {Link} from 'react-router-dom';
import { Nav } from "react-bootstrap";

export const Header = () => {
    return (
        <div className="header">
            <Link to='/home'><h2>React - Блог</h2></Link>
            <Nav variant="pills">
                <Nav.Item>
                    <Nav.Link to="/home" as={Link}>Главная</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link to="/about" as={Link}>Обо мне</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link to="/login" as={Link}>Войти</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};
