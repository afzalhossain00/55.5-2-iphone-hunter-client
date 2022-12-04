import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const phones = useLoaderData();
    return (
        <div>
            <h2>Show me all the phones you have</h2>
            <h4>I got: {phones.length}</h4>
            {
                phones.map(phone => <li><Link to={`/phones/${phone.id}`}>{phone.name}</Link></li>)
            }
        </div>
    );
};

export default Home;