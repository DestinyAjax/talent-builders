import React, { Component } from "react";
import { DefaultBtn } from "../../reuse/button";
import Slider from "react-rangeslider";
import { Magnifer } from "../../reuse/svg";
import "react-rangeslider/lib/index.css";
import "../../scss/advancedSearch.scss";

class AdvancedSearch extends Component {
    state = {
        horizontal: 0
    };
    handleChangeHorizontal = value => {
        this.setState({
            horizontal: value
        });
    };
    render() {
        const { horizontal } = this.state;
        const horizontalLabels = {
            0: "Price from ₦0",
            100: "To ₦200,000"
        };

        const formatAmount = value => `₦ ${value}`;
        return (
            <div className="d-grd advanced-search">
                <div className="search-cont d-flx al-i-c p-rel">
                    <Magnifer />
                    <input
                        className="search-input"
                        placeholder="What vocation do you want to learn?"
                    />
                </div>
                <div className="search-cont d-flx al-i-c p-rel">
                    <select className="search-input select">
                        <option>Course Category</option>
                    </select>
                </div>
                <div className="p-rel">
                    <div className="slider custom-labels">
                        <Slider
                            min={0}
                            tooltip={false}
                            max={200000}
                            value={horizontal}
                            labels={horizontalLabels}
                            format={formatAmount}
                            handleLabel={horizontal}
                            onChange={this.handleChangeHorizontal}
                        />
                        <div className="value text-c">
                            {formatAmount(horizontal)}
                        </div>
                    </div>
                </div>
                <div className="search-cont d-flx al-i-c p-rel">
                    <input
                        className="search-input normal"
                        placeholder="Enter Author’s name"
                    />
                </div>
                <div className="search-cont d-flx al-i-c p-rel">
                    <select className="search-input select">
                        <option>Duration in hours</option>
                    </select>
                </div>
                <DefaultBtn title="Search" />
            </div>
        );
    }
}

export { AdvancedSearch };
