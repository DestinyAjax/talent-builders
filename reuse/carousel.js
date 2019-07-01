import React, { Fragment } from "react";

import Slider from "react-slick";
import Link from "next/link";
import { Fullstar, Emptystar, Contact, Clock } from "./svg";

var settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true
            }
        }
    ]
};

export const CarouselComponent = props => {
    const { title } = props;
    return (
        <Fragment>
            <div className="carousel-nav d-flx j-c-sb al-i-c cmb-3">
                <h5>{title}</h5>
                <Link>
                    <a>See all</a>
                </Link>
            </div>
            <Slider {...settings}>
                <div
                    className="carousel-item csr"
                    onClick={() => console.log("eze")}>
                    <img
                        src="/static/photographer.png"
                        alt="course cover art"
                    />
                    <div className="text-cont">
                        <p className="cmb-hh">Kamsi</p>
                        <h5>How to murder opponents on FIFA19</h5>
                        <span className="stars-cont cmtb-1">
                            <Fullstar />
                            <Fullstar />
                            <Fullstar />
                            <Fullstar />
                            <Fullstar />
                        </span>
                        <div className="d-flx j-c-sb cmt-hh">
                            <span className="d-flx al-i-c">
                                <Contact />
                                1,029
                            </span>
                            <span className="d-flx al-i-c">
                                <Clock />
                                22 hours
                            </span>
                        </div>
                        <p className="price">$40</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src="/static/photographer.png"
                        alt="course cover art"
                    />
                    <div className="text-cont">
                        <p className="cmb-hh">Kamsi</p>
                        <h5>How to murder opponents on FIFA19</h5>
                        <span className="stars-cont cmtb-1">
                            <Fullstar />
                            <Emptystar />
                            <Emptystar /> <Emptystar />
                            <Emptystar />
                        </span>
                        <div className="d-flx j-c-sb cmt-hh">
                            <span className="d-flx al-i-c">
                                <Contact />
                                1,029
                            </span>
                            <span className="d-flx al-i-c">
                                <Clock />
                                22 hours
                            </span>
                        </div>
                        <p className="price">$40</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src="/static/photographer.png"
                        alt="course cover art"
                    />
                    <div className="text-cont">
                        <p className="cmb-hh">Kamsi</p>
                        <h5>How to murder opponents on FIFA19</h5>
                        <span className="stars-cont cmtb-1">
                            <Fullstar />
                            <Fullstar />
                            <Fullstar />
                            <Fullstar />
                            <Fullstar />
                        </span>
                        <div className="d-flx j-c-sb cmt-hh">
                            <span className="d-flx al-i-c">
                                <Contact />
                                1,029
                            </span>
                            <span className="d-flx al-i-c">
                                <Clock />
                                22 hours
                            </span>
                        </div>
                        <p className="price">$40</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src="/static/photographer.png"
                        alt="course cover art"
                    />
                    <div className="text-cont">
                        <p className="cmb-hh">Kamsi</p>
                        <h5>How to murder opponents on FIFA19</h5>
                        <span className="stars-cont cmtb-1">
                            <Fullstar />
                            <Fullstar />
                            <Fullstar />
                            <Fullstar />
                            <Fullstar />
                        </span>
                        <div className="d-flx j-c-sb cmt-hh">
                            <span className="d-flx al-i-c">
                                <Contact />
                                1,029
                            </span>
                            <span className="d-flx al-i-c">
                                <Clock />
                                22 hours
                            </span>
                        </div>
                        <p className="price">$40</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src="/static/photographer.png"
                        alt="course cover art"
                    />
                    <div className="text-cont">
                        <p className="cmb-hh">Kamsi</p>
                        <h5>How to murder opponents on FIFA19</h5>
                        <span className="stars-cont cmtb-1">
                            <Fullstar />
                            <Fullstar />
                            <Fullstar />
                            <Fullstar />
                            <Emptystar />
                        </span>
                        <div className="d-flx j-c-sb cmt-hh">
                            <span className="d-flx al-i-c">
                                <Contact />
                                1,029
                            </span>
                            <span className="d-flx al-i-c">
                                <Clock />
                                22 hours
                            </span>
                        </div>
                        <p className="price">$40</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src="/static/photographer.png"
                        alt="course cover art"
                    />
                    <div className="text-cont">
                        <p className="cmb-hh">Kamsi</p>
                        <h5>How to murder opponents on FIFA19</h5>
                        <span className="stars-cont cmtb-1">
                            <Fullstar />
                            <Fullstar />
                            <Fullstar />
                            <Fullstar />
                            <Fullstar />
                        </span>
                        <div className="d-flx j-c-sb cmt-hh">
                            <span className="d-flx al-i-c">
                                <Contact />
                                1,029
                            </span>
                            <span className="d-flx al-i-c">
                                <Clock />
                                22 hours
                            </span>
                        </div>
                        <p className="price">$40</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src="/static/photographer.png"
                        alt="course cover art"
                    />
                    <div className="text-cont">
                        <p className="cmb-hh">Kamsi</p>
                        <h5>How to murder opponents on FIFA19</h5>
                        <span className="stars-cont cmtb-1">
                            <Fullstar />
                            <Fullstar />
                            <Fullstar />
                            <Emptystar />
                            <Emptystar />
                        </span>
                        <div className="d-flx j-c-sb cmt-hh">
                            <span className="d-flx al-i-c">
                                <Contact />
                                1,029
                            </span>
                            <span className="d-flx al-i-c">
                                <Clock />
                                22 hours
                            </span>
                        </div>
                        <p className="price">$40</p>
                    </div>
                </div>
            </Slider>
        </Fragment>
    );
};
