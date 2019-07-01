import React, { Component } from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/Nav/Nav";
import "./pages_scss/index.scss";
import { Magnifer, Search, Videoplayer, Training, Google } from "../reuse/svg";
import { DefaultBtn } from "../reuse/button";
import { CarouselComponent } from "../reuse/carousel";
import { Vocations } from "./components/Vocations";
import { Article } from "./components/Article";
import { NewsLetter } from "./components/NewsLetter";
import { Footer } from "./components/Footer";
import { AdvancedSearch } from "./components/AdvancedSearch";

const floater = [
    {
        header: "Explore",
        text: "Over 10,000 courses taught by experts",
        icon: "search"
    },
    {
        header: "Enroll",
        text: "In courses at any time with full access",
        icon: "video"
    },
    {
        header: "Learn",
        text: "At your own pace, from any device",
        icon: "train"
    }
];
class Home extends Component {
    state = { searchType: "simple" };

    advancedSearchClicked = () => {
        this.setState({ searchType: "advanced" });
    };
    render() {
        const { searchType } = this.state;
        return (
            <div className="p-rel ovr-fl-h">
                <Head title="Home" />
                <Nav />

                <div className="section0" />
                <div className="section1 d-flx-c j-c-c al-i-c">
                    <div className="overlay" />
                    <div className="d-flx-c al-i-c">
                        <h1 className="cmt-3">Learn the skills you need</h1>
                        <p className="cmb-3">
                            Take in-depth online voational courses and meet any
                            challenge with skills. Find the study program that
                            best fits your learning goals
                        </p>
                    </div>
                    {searchType === "simple" ? (
                        <>
                            <div className="search-cont d-flx al-i-c p-rel">
                                <Magnifer />
                                <input
                                    className="search-input"
                                    placeholder="What vocation do you want to learn?"
                                />
                                <DefaultBtn title="Search" />
                            </div>
                            <span
                                onClick={this.advancedSearchClicked}
                                className="cmt-2 p-norm csr adv-btn">
                                Advanced Search
                            </span>
                        </>
                    ) : (
                        <AdvancedSearch />
                    )}
                </div>

                <div className="floating-section mx-auto d-flx j-c-sb al-i-c prl-3 ptb-2">
                    {floater.map(({ header, icon, text }) => (
                        <div className="sub-float-cont d-grd al-i-c csr">
                            {icon === "search" ? (
                                <Search />
                            ) : icon === "video" ? (
                                <Videoplayer />
                            ) : (
                                <Training />
                            )}
                            <div style={{ width: `${174}px` }}>
                                <h4>{header}</h4>
                                <p className="p-grey">{text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="carousel1-section mx-auto">
                    <CarouselComponent title="Top Courses" />
                </div>

                <div className="carousel2-section mx-auto">
                    <CarouselComponent title="Latest Courses" />
                </div>

                <div className="section2 d-flx-c j-c-c al-i-c cmt-11">
                    <h3>Our Vocations</h3>
                    <p className="p-norm -p-grey cmb-7 orange-mark">
                        Choose one of our vocations and upgrade your skills
                    </p>
                    <Vocations />
                </div>

                <div className="section3 d-flx-c j-c-c al-i-c cmt-11">
                    <h3>Our Partners</h3>
                    <p className="p-norm -p-grey cmb-7 orange-mark">
                        Receive great support from the best
                    </p>
                    <Google />
                </div>

                <div className="section3 d-flx-c j-c-c al-i-c cmt-11">
                    <h3>Our Blog</h3>
                    <p className="p-norm -p-grey cmb-7 orange-mark">
                        Trending articles and posts for you
                    </p>
                    <Article />
                    <Link>
                        <a className="pri-btn cmt-6">Read more</a>
                    </Link>
                </div>
                <NewsLetter />
                <Footer />
            </div>
        );
    }
}

export default Home;
