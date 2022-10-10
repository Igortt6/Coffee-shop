import { Component } from 'react';

import './app.sass';
import Main from '../main/main';
import About from '../aboutUs/about';
import OurBest from '../ourBest/ourBest';


class App extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        return (
            <div className='app'>
                <Main/>
                <About/>
                <OurBest/>
               
            </div>
        );
    }
}
export default App;