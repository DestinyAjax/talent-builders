import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Link from "next/link";
import Head from "../../components/head";
import Nav from "../../components/Nav/Nav";
import InputField from '../../components/InputField/InputField';
import Divider from '../../components/Divider/Divider';
import { Footer } from "../components/Footer";
import "./signin.scss"

import { login } from '../../redux-flow/actions/index';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            type: 'password',
            loginAttempt: 0
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.showHide = this.showHide.bind(this);
    }

    static async getInitialProps(context) {
        
    }

    showHide = e => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
          type: this.state.type === 'input' ? 'password' : 'input'
        })  
    };

    signinHandler = e => {
        e.preventDefault();
        return;
    };

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({[name]: value });
    };

    render() {
        return (
            <div>
                <Head title="Signin" />
                <Nav />
                <div className="signin-section">
                    <div className="container">
                        <div className="row signin-header-sec">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <p className="signin-h1">Login To Your Account</p>
                                <p className="signin-p">To continue on your course page on Talent Builder</p>
                            </div>
                        </div>
                        <div className="row signin-form-sec">
                            <div className="col-md-6">
                                <form onSubmit={this.signinHandler}>
                                    <div className="form-group input-container">
                                        <label className="input-label">Email Address <span className="tb-compulsory">*</span></label>
                                        <InputField 
                                            fieldType="email"
                                            fieldName="email"
                                            fieldValue={this.state.email}
                                            onChangeField={this.handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group input-container">
                                        <label className="input-label">Password <span className="tb-compulsory">*</span></label>
                                        <InputField
                                            fieldName="password"
                                            fieldType={this.state.type}
                                            fieldValue={this.state.password}
                                            onChangeField={this.handleInputChange}
                                            onShowPassword={this.showHide}
                                        />
                                        <div>
                                            <p className="forgot-pass">
                                                <Link><a href="/forgot-password">Forgot Password?</a></Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary signin-btn">Login</button>
                                    </div>
                                </form>
                            </div>
                            <Divider type="signin" />
                            <div className="col-md-3 btn-sec">
                                <div>
                                    <div className="form-group input-container">
                                        <a href="/signup">
                                            <button type="button" className="btn btn-primary signin-btn">Sign up</button>
                                        </a>
                                    </div>
                                    <div className="form-group">
                                        <a href="/">
                                            <button type="button" className="btn btn-warning back-btn">Back to Home</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default SignIn;