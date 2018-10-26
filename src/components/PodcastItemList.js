import React from 'react';
import { Link } from 'react-router-dom';

const PodcastItemList = ({ item }) => {
    return (
        <Link className="podcast-item" key={item.id} to={`/podcast/${item.id}`}>
            <img src={item.image} alt={item.name} />

            <div>
                <h4>{item.name}</h4>
                <span>Author: {item.author}</span>
            </div>
        </Link>
    );
};

export default PodcastItemList;
