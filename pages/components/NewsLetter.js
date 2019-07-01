import React from "react";
import FeatherIcon from "feather-icons-react";
import { DefaultBtn } from "../../reuse/button";
export const NewsLetter = () => (
    <div className="newsletter cmt-3 d-flx j-c-sb al-i-c">
        <div className="d-flx al-i-c j-c-sb sub-newsletter">
            <div className="left cmtb-2">
                <h4>Be the first to get amazing deals</h4>
                <p className="p-norm p-grey">
                    Subscribe to out newsletter to get latest course updates and
                    other vocational related articles to your email
                </p>
            </div>
            <div className="right cmtb-1">
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <FeatherIcon
                                            icon="user"
                                            className="cmr-2"
                                            size="20"
                                        />
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    className={"form-control"}
                                    name="name"
                                    // value={this.state.form.password}
                                    placeholder="Name"
                                    // onChange={value =>
                                    //     _handleFormChange("password", value, this)
                                    // }
                                />
                            </div>
                        </div>
                        {/* {this.state.error.password && (
                        <div className="invalid-feedback">
                            {this.state.error.password}
                        </div>
                    )} */}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <FeatherIcon
                                            icon="mail"
                                            className="cmr-2"
                                            size="20"
                                        />
                                    </span>
                                </div>
                                <input
                                    type="emai"
                                    className={"form-control"}
                                    name="email"
                                    // value={this.state.form.password}
                                    placeholder="Email Address"
                                    // onChange={value =>
                                    //     _handleFormChange("password", value, this)
                                    // }
                                />
                            </div>
                        </div>
                        {/* {this.state.error.password && (
                        <div className="invalid-feedback">
                            {this.state.error.password}
                        </div>
                    )} */}
                    </div>
                </div>

                <DefaultBtn title="Subscribe" width="376" />
            </div>
        </div>
    </div>
);
