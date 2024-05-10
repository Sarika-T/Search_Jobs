import SearchContent from "../SearchContent/SearchContent";
import { Tabs } from "../Tabs/Tabs";
import './MainPage.scss';

export function MainPage() {
    return (
        <div className="mainpage">
            <div className="mainpage-content">
                <div className="mainpage-content-left">
                    <Tabs />
                </div>
                <div className="mainpage-content-middle">
                    <SearchContent />
                </div>
                <div className="mainpage-content-right">
                </div>
            </div>
        </div>
    )
}