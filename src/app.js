import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Videos from './components/videos';
import Contact from './components/contact';

class App extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/videos'>Videos</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </nav>
                <Route exact path="/" component='Home'/>
                <Route path="/about" component='About'/>
                <Route path="/videos" component='Videos'/>
                <Route path="/contact" component='Contact'/>
            </div>
        )
    }
}

export default App;

