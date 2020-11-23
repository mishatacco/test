import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import validator from 'validator';

import {registerAction} from '../actions/auth.action';
import {clearMessage} from '../actions/message.action';

const clearFieldValue = (value) => value.toString().trim();

const required = (value) => {
    if (!clearFieldValue(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const validationEmail = (value) => {
    if (!validator.isEmail(clearFieldValue(value))) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

const validationUsername = (value) => {
    if (clearFieldValue(value).length < 3 || clearFieldValue(value).length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};

const validationPassword = (value) => {
    if (clearFieldValue(value).length < 6 || clearFieldValue(value).length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

const Register = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successful, setSuccessful] = useState(false);

    const {message} = useSelector(state => state.messageReducer);

    const dispatch = useDispatch();

    const onChangeUsername = (event) => {
        const username = event.target.value;
        setUsername(clearFieldValue(username));
        dispatch(clearMessage());
    };

    const onChangeFirstName = (event) => {
        const firstName = event.target.value.toString().trim();
        setFirstName(clearFieldValue(firstName));
        dispatch(clearMessage());
    };

    const onChangeLastName = (event) => {
        const lastName = event.target.value.toString().trim();
        setLastName(clearFieldValue(lastName));
        dispatch(clearMessage());
    };

    const onChangeEmail = (event) => {
        const email = event.target.value.toString().trim();
        setEmail(clearFieldValue(email));
        dispatch(clearMessage());
    };

    const onChangePassword = (event) => {
        const password = event.target.value.toString().trim();
        setPassword(clearFieldValue(password));
        dispatch(clearMessage());
    };

    const handleRegister = (event) => {
        event.preventDefault();

        setSuccessful(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            dispatch(registerAction(username, email, password, firstName, lastName))
                .then(() => {
                    setSuccessful(true);
                    props.history.push('/login');
                })
                .catch(() => {
                    setSuccessful(false);
                });
        }
    };

    return (
        <div className="col-md-12">
            <div className="card card-container">
                <img
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    alt="profile-img"
                    className="profile-img-card"
                />

                <Form onSubmit={handleRegister} ref={form}>
                    {!successful && (
                        <div>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    value={username}
                                    onChange={onChangeUsername}
                                    validations={[required, validationUsername]}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="firstName">First name</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="firstName"
                                    value={firstName}
                                    onChange={onChangeFirstName}
                                    validations={[]}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastName">Last name</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="lastName"
                                    value={lastName}
                                    onChange={onChangeLastName}
                                    validations={[]}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    value={email}
                                    onChange={onChangeEmail}
                                    validations={[required, validationEmail]}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={password}
                                    onChange={onChangePassword}
                                    validations={[required, validationPassword]}
                                />
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary btn-block">Sign Up</button>
                            </div>
                        </div>
                    )}

                    {message && (
                        <div className="form-group">
                            <div className={successful ? 'alert alert-success' : 'alert alert-danger'} role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                    <CheckButton style={{display: 'none'}} ref={checkBtn}/>
                </Form>
            </div>
        </div>
    );
};


export default Register;
