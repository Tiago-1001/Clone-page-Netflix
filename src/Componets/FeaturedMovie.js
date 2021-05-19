import React from 'react';
import './FeaturedMovie.scss'

export default ({item}) => {
    return (
        <section className="featured">
            <div>{item.original_name}</div>
        </section>
    )
}