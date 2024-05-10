import { SearchIcon } from "../../assests/icons";
import StyleTabs from "../../common/StyleTabs";
import './Tabs.scss';
import * as React from 'react';
import { useState } from 'react';


export function Tabs() {
    return (
        <div className="tabs">
            <div className="tabs-page">
                <div className="tabs-page-header">
                    <img className= 'tabs-page-header-image' src= "https://tse4.mm.bing.net/th?id=OIP.xQBTHdJrJ5J6HZY19nZW4QAAAA&pid=Api&P=0&h=220" alt="Logo" />
                </div>
                <div className="tabs-page-body">
                    <span className="tabs-page-body-text">Looking For a Job</span>
                    <div className="tabs-page-body-icon">
                        <SearchIcon />
                        <span>Search Jobs</span>
                    </div>   
                </div>
            </div>
        </div>
    )
}