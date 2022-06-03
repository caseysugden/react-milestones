import React from "react";
import MilestonePNG from './milestone.png'
export default function Title() {
    return (
        <div className="title">
            <h1><img src={MilestonePNG} width='40'></img>milestones</h1>
        </div>
    )
}