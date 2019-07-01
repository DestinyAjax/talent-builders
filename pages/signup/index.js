import React, { Component } from 'react'
import Link from "next/link";
import Head from "../../components/head";
import Nav from "../../components/Nav/Nav";
import InputField from '../../components/InputField/InputField';
import Divider from '../../components/Divider/Divider';
import "./signup.scss"

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            userName: "",
            hasAccepted: false,
            type: 'password'
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.showHide = this.showHide.bind(this);
    }

    showHide = e => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
          type: this.state.type === 'input' ? 'password' : 'input'
        })  
    };

    signupHandler = e => {
        e.preventDefault();
        return;
    };

    handleInputChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({[name]: value });
    };

    render() {
        return (
            <>
                <Head title="Signup" />
                <Nav />
                <div className="signup-section">
                    <div className="container">
                        <div className="row signup-header-sec">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <p className="signup-h1">Create Your Account</p>
                                <p className="signup-p">To learn any vocational course on our platform</p>
                            </div>
                        </div>
                        <div className="row signup-form-sec">
                            <div className="col-md-6">
                                <form onSubmit={this.signupHandler}>
                                    <div className="form-group input-container">
                                        <label className="input-label">User Name</label>
                                        <InputField 
                                            fieldName="userName"
                                            fieldType="text"
                                            fieldValue={this.state.userName}
                                            onChangeField={this.handleInputChange}
                                        />
                                    </div>
                                    <div className="form-row input-container">
                                        <div className="col">
                                            <label className="input-label">First Name <span className="tb-compulsory">*</span></label>
                                            <InputField 
                                                fieldName="firstName"
                                                fieldType="text"
                                                fieldValue={this.state.firstName}
                                                onChangeField={this.handleInputChange}
                                            />
                                        </div>
                                        <div class="col">
                                            <label className="input-label">Last Name <span className="tb-compulsory">*</span></label>
                                            <InputField 
                                                fieldName="lastName"
                                                fieldType="text"
                                                fieldValue={this.state.lastName}
                                                onChangeField={this.handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group input-container">
                                        <label className="input-label">Email Address <span className="tb-compulsory">*</span></label>
                                        <InputField 
                                            fieldName="email"
                                            fieldType="email"
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
                                    </div>
                                    <div className="form-group input-container">
                                        <div className="form-check">
                                            <label className="form-check-label" for="gridCheck">
                                                <input className="form-check-input input-checkbox" type="checkbox" 
                                                    name="hasAccepted"
                                                    checked={this.state.hasAccepted}
                                                    onChange={this.handleInputChange}
                                                />
                                                By clicking on sign up, you agree to our terms of use and privacy policy.
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary signup-btn">Sign up</button>
                                    </div>
                                </form>
                            </div>
                            <Divider type="signup"/>
                            <div className="col-md-3 btn-sec">
                                <div>
                                    <div className="form-group input-container">
                                        <a href="/signin">
                                            <button type="button" className="btn btn-primary signup-btn">Login</button>
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
            </>
        );
    }
}

export default Signup;