import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import './HomePage.css';

class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
        }
        this.handlePrevent = this.handlePrevent.bind(this);
    }

    handlePrevent(e){
        e.preventDefault();
    }

    render(){
        return(
            <Fragment>
                {/* navbar content */}
                <nav>
                    <div class="logo"><p>{this.props.judul}</p></div>
                    <ul class="mainMenu">
                        <li className="list"><Link to="/">Home</Link></li>
                        <li className="list list-ghost"><button className="btn-vol1" onClick={this.handlePrevent}><Link className="a"to="/Sign">Sign In</Link></button></li>
                    </ul>
                </nav>
                {/* content fill */}
                <div className="Container">
                    <h2>Home Page</h2>
                </div>
            </Fragment>
        );
    }
}

export default HomePage;