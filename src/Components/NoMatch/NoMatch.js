import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <div>
            <h2>Page not found, go back to <Link to='/'>Homepage</Link></h2>
        </div>
    );
};

export default NoMatch;