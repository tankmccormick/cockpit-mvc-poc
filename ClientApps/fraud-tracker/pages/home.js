import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// contexts
import RootUrlContext from '../contexts/rootUrlContext';
import TokenContext from '../contexts/tokenContext';

class Home extends Component {
    render() {
        return (
            <section className="container">
                <h1>Fraud Tracker</h1>

                <TokenContext.Consumer>{val => <p>{val}</p>}</TokenContext.Consumer>

                <RootUrlContext.Consumer>
                    {root => <NavLink to={root + '/step2'}>Step2</NavLink>}
                </RootUrlContext.Consumer>
            </section>
        );
    }
}

export default Home;