import StyleTabs from '../../common/StyleTabs';
import DataCards from '../DataCards/DataCards';
import './SearchContent.scss';
import { useState } from 'react';

export default function SearchContent() {
    const [selectedFilters, setSelectedFilters] = useState({});
    return (
        <div className="searchcontent">
            <div className="searchcontent-col">
                <div className= "searchcontent-col-header">
                    <img  className= "searchcontent-col-header-image" src="https://tse2.mm.bing.net/th?id=OIP.ucAP7M_hfqCAt0mWOdWcRQHaHa&pid=Api&P=0&h=220" alt="hello"/>
                    <span className= "searchcontent-col-header-image-text">Username</span>
                    <div className="searchcontent-col-header-chatbot">
                        <img className="searchcontent-col-header-chatbot-image"src="https://tse3.mm.bing.net/th?id=OIP.BlCqgS5tOhUcb-86KC7MDgHaHa&pid=Api&P=0&h=220" alt="chatbot"/>
                    </div>
                </div>
                <div className="searchcontent-col-body">
                    <div className="searchcontent-col-body-news">
                    <span>We, at Weekday, are creadting a go-to hub for uncvering the real issues canidates should be aware of before joining a company.</span>
                    <a href="Acess 150+ company reviews here">Acess 150+ company reviews here</a>
                    </div>
                    <div className="searchcontent-col-body-tabs">
                        <StyleTabs selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
                    </div>
                    <div className="searchcontent-col-body-cards">
                        <DataCards selectedFilters={selectedFilters} />
                    </div>
                </div>
            </div>
        </div>
    )
}