import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

// contexts
import RootUrlContext from './contexts/rootUrlContext';
import TokenContext from './contexts/tokenContext';

// pages
import Home from './pages/home';
import Step2 from './pages/step2';
import Step3 from './pages/step3';

class App extends Component {
    render() {
        return (
            <RootUrlContext.Provider value={this.props.rootUrl}>
                <TokenContext.Provider value={this.props.token}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact path={this.props.rootUrl + '/'} render={(props) => <Home {...props} />} />
                            <Route exact path={this.props.rootUrl + '/step2'} render={(props) => <Step2 {...props} />} />
                            <Route exact path={this.props.rootUrl + '/step3'} render={(props) => <Step3 {...props} />} />
                        </Switch>
                    </Suspense>
                </TokenContext.Provider>
            </RootUrlContext.Provider>
        );
    }
}

export default withRouter(App);