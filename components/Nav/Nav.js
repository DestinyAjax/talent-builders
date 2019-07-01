import React, { Component } from "react";
import Link from "next/link";
import { TBLogo, Cart } from "../../reuse/svg";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from "reactstrap";
import "./nav.scss";
class Navigation extends Component {
    state = { isOpen: false };
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };
    render() {
        return (
            <Navbar color="faded" light expand="md">
                <div className="container">
                    <NavbarBrand href="/">
                        <TBLogo />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />

                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link>
                                    <a className="cmrl-2">Home</a>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link>
                                    <a className="cmrl-2">Courses</a>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link>
                                    <a className="cmrl-2">About</a>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link>
                                    <a className="cmrl-2">Contact</a>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link>
                                    <a className="cmrl-2">Membership</a>
                                </Link>
                            </NavItem>
                        </Nav>
                        <div className="d-flx ">
                            <NavItem className="full-bar">
                                <Cart />
                            </NavItem>
                            <NavItem>
                                <Link>
                                    <a className="cmrl-3 login">Login</a>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link>
                                    <a className="pri-btn">Signup</a>
                                </Link>
                            </NavItem>
                        </div>
                    </Collapse>
                    <NavItem className="sidebar-open">
                        <Cart />
                    </NavItem>
                </div>
            </Navbar>
        );
    }
}
<nav className="navbar d-flx  al-i-c">
    <div className="container d-flx j-c-sb al-i-c mx-auto">
        <div className="">
            <TBLogo />
        </div>
        <div className="d-flx j-c-sb " />
        <div className="w-fit-c al-i-c d-flx">
            <Cart />
            <Link>
                <a className="cmrl-3">Login</a>
            </Link>
            <Link>
                <a className="pri-btn">Signup</a>
            </Link>
        </div>
    </div>
</nav>;

export default Navigation;
