import React from 'react';
import './main.scss'

const Main = (props) => {
    return (
        <div className="main">
            <div className="container_main">
                <h1>Everything You Love About Coffee</h1>
                <div className="container">
                    <span></span>
                    <img src="../../../public/img/icons/Vector.png" alt="coffee" className="img" />
                    <span></span>
                </div>
                <h2>We makes every day full of energy and taste</h2>
                <h2>Want to try our beans?</h2>
                <button className="more">More</button>
            </div>
        </div>
    )
} 
export default Main;