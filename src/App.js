import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import {Home} from './pages/Home'
import TD from './pages/ToDo/TD'
import {connect} from 'react-redux'
import {compose} from "redux";


const App = (props) => {

    return (
        <div>
            <Navbar/>
            <div className="container pt-4">
                <Switch>
                    <Route path='/' exact render={() => <Home/>}/>
                    <Route path='/todo' exact render={() => <TD/>}/>
                </Switch>
            </div>
        </div>
    );
}



export default compose(
    connect(null, null),
    withRouter
)(App);