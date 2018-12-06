import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NotFound.scss';

const NotFound = () => (
    <div className="not-found">
            <div className = "error-message">
                <h1>404</h1>
                <h4>This page does not exist.</h4>
            </div>
            <Link to="/" className="back-to-home">
            Back to home
            </Link>
    </div>
)

export default NotFound;