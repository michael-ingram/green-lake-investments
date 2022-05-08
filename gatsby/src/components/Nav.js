import React from 'react';
import { Link } from 'gatsby';
import NavStyles from '../styles/NavStyles';

export default function Nav() {
    return (
        <NavStyles>
            <ul>
                <li>
                    <Link to="/" activeClassName="active">Home</Link>
                </li>
                <li>
                    <Link to="/about" activeClassName="active">About</Link>
                </li>
                <li>
                    <Link to="/availablehomes" activeClassName="active">Properties</Link>
                </li>
                <li>
                    <Link to="/residents" activeClassName="active">Residents</Link>
                </li>
                <li>
                    <Link to="/contact" activeClassName="active">Contact</Link>
                </li>
            </ul>
        </NavStyles>
    );
}
