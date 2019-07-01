import React from "react";
import Link from "next/link";
export const Article = () => (
    <div className="article-cont csr">
        <img src="/static/brush_cups.png" />
        <div className="text-cont">
            <h4>Crafting</h4>
            <p className="p-norm p-grey">
                Without crafting, life would be a mistake.
            </p>
            <Link to="/">
                <a>Read more</a>
            </Link>
        </div>
    </div>
);
