import {Fragment, useEffect} from 'react'
import '../asset/css/common/header.css';
import '../asset/css/common/responsive.css';
import '../asset/Font/themify-icons/themify-icons.css';
function Header(){
    useEffect(()=>{
        
        const liElements = document.querySelector('.mobile-menu-btn');
        liElements.addEventListener('click', () => {
            const headerEl= document.querySelector('.header');
            const heighHeaderEl = headerEl.clientHeight;
            if(heighHeaderEl === 46)
                headerEl.style.height = 'auto';
            else
                headerEl.style.height = '46px';
        })

        const menuItems = document.querySelectorAll('#nav  li  a[href*="#"]');
        for(const menuItem of menuItems){
            menuItem.addEventListener('click', (event) => {
                const headerEl= document.querySelector('.header');
                const isParent = menuItem.nextElementSibling && menuItem.nextElementSibling.classList.contains('subnav');

                if(isParent){
                    event.preventDefault();
                    headerEl.style.height = 'auto';
                }
                else{
                    headerEl.style.height = '46px';
                }
            })
        }
    }, [])

    return (
        <Fragment>
            <div id="header" className ="header mobile-header">
                <ul id="nav">
                    <li><a href="#">HOME</a></li>
                    <li><a href="#content">BAND</a></li>
                    <li><a href="#tour">TOUR</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                    <li>
                        <a href="#">MORE
                        <i className = "nav-arrow-down ti-angle-down"> </i>
                        </a>
                        <ul className="subnav">
                            <li><a href="#">Merchandise</a></li>
                            <li><a href="#">Extras</a></li>
                            <li><a href="#">Media</a></li>
                        </ul>
                    </li>
                </ul>

                <div className = "search-btn">
                    <i className = "search-icon ti-search"></i>
                </div>
                <div className="mobile-menu-btn">
                    <i className="ti-menu"></i></div>
                </div>
        </Fragment>
    )
}
export default Header