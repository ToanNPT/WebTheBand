import {Fragment} from 'react'
import '../asset/css/common/header.css';
import '../asset/Font/themify-icons/themify-icons.css';
function Header(){
    return (
        <Fragment>
            <div id="header">
                <ul id="nav">
                    <li><a href="">HOME</a></li>
                    <li><a href="">BAND</a></li>
                    <li><a href="">TOUR</a></li>
                    <li><a href="">CONTACT</a></li>
                    <li>
                        <a href="">MORE
                        <i className = "nav-arrow-down ti-angle-down"> </i>
                        </a>
                        <ul className="subnav">
                            <li><a href="">Merchandise</a></li>
                            <li><a href="">Extras</a></li>
                            <li><a href="">Media</a></li>
                        </ul>
                    </li>
                </ul>

                <div className = "search-btn">
                    <i className = "search-icon ti-search"></i>
                </div>
            </div>
        </Fragment>
    )
}
export default Header