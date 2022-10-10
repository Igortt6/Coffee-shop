import React from 'react'
import './ourBest.scss';
import OurBestItem from '../ourBest_item/ourBest_item';

const OurBest = (props) => {
    return(
        <div className="ourBest">
            <div className="container_ourBest">
                <h2 className="h2_ourBest">Our best</h2>
                <OurBestItem/>
            </div>
        </div>
    )
}

export default OurBest;