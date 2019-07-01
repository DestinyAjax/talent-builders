import React, { Component } from "react";
import { NewsLetter } from "./components/NewsLetter";
import { Footer } from "./components/Footer";
import Nav from "../components/Nav/Nav";
class Search extends Component {
    render() {
        return (
            <div className="p-rel ovr-fl-h">
                <Nav />
                <NewsLetter />
                <Footer />
            </div>
        );
    }
}

export default Search;
