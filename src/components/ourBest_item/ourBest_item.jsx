import React from 'react';
import './ourBest_item.scss';

const OurBestItem = (props) => {
    return (
        <div className="ourBest_item">
            <img src="../../img/ourBest/img_1.png" alt="" className="ourBest_item_img" />
            <h2 className="ourBest_item_title">Solimo Coffee Beans 2 kg</h2>
            <div className="ourBest_item_prise">10.73$</div>
        </div>
    )
}
 
export default OurBestItem;