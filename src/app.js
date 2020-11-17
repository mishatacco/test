import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, Route, Router, Switch} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import {logoutAction} from './actions/auth.action';
import {clearMessage} from './actions/message.action';
import Chat from './pages/chat';
import Home from './pages/home';
import Profile from './pages/profile';
import Login from './pages/login';
import {history} from './router-helper';

const App = () => {
    const {isLoggedIn} = useSelector(state => state.authReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location) => {
            dispatch(clearMessage());
        });
    }, [dispatch]);

    const logOut = () => {
        dispatch(logoutAction());
    };

    return (
        <Router history={history}>
            <div>
                <nav className="navbar navbar-expand navbar-light">
                    <Link to={"/"} className="navbar-brand">
                        CMS
                    </Link>
                    {isLoggedIn ? (
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={"/home"} className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="/chat" className="nav-link">
                                    Chat
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link to={"/profile"} className="nav-link">
                                    Profile
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="/login" className="nav-link" onClick={logOut}>
                                    LogOut
                                </a>
                            </li>
                        </div>
                    ) : (
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={"/login"} className="nav-link">
                                    Login
                                </Link>
                            </li>
                        </div>
                    )}
                </nav>

                <div className="container mt-3">
                    <Switch>
                        <Route exact path={["/", "/home"]} component={Home}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/profile" component={Profile}/>
                        <Route exact path="/chat" component={Chat}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;
