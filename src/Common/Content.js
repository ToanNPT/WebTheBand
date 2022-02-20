import '../asset/css/common/content.css';
import '../asset/css/common/modal.css';
import '../asset/css/common/responsive.css';
import Modal from '../Common/Modal'
import { Fragment, useRef} from 'react'

function Content(){
    //const [clicked, setClick] = useState(false);
    const closed = useRef();
    const handleShowModal = () =>{
        closed.current.classList.add('open-modal');
    }
    return (
        <Fragment>
        <div id="content">
            <div className="content-section">
                <h2 className="section-heading">THE BAND</h2>
                <p className="sub-heading-section">We love music</p>
                <p className="about-section">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                
                <div className="members-list">
                    <div className="member-item">
                        <p className="member-name">Name</p>
                        <img src="https://www.w3schools.com/w3images/bandmember.jpg" alt="Member Image" className="member-img" />
                    </div>

                    <div className="member-item">
                        <p className="member-name">Name</p>
                        <img src="https://www.w3schools.com/w3images/bandmember.jpg" alt="Member Image" className="member-img" />
                    </div>

                    <div className="member-item">
                        <p className="member-name">Name</p>
                        <img src="https://www.w3schools.com/w3images/bandmember.jpg" alt="Member Image" className="member-img" />
                    </div>
                </div>
            </div>
            
            <div className="tour-section" id="tour">
                <div className="content-section">
                    <h2 className="section-heading">TOUR DATES</h2>
                    <p className="sub-heading-section">Remember to book your tickets!</p>
                    
                    <ul className="tickets-list">
                        <li>September <span className="sold-out">Sold out</span></li>
                        <li>October <span className="sold-out">Sold out</span></li>
                        <li>November <span className="quality">3</span></li>
                    </ul>

                    <div className="places-list">
                        <div className="place-item mobile-place-item">
                            <img 
                                src="https://www.w3schools.com/w3images/newyork.jpg" 
                                alt="New York" 
                                className="place-img" 
                            />
                            <div className="place-body">
                                <h3 className="place-name">New York</h3>
                                <p className="place-date">Fri 27 Nov 2016</p>
                                <p className="place-content">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                                <button 
                                    onClick={handleShowModal}
                                    className="btn-place-order">Buy Tickets</button>
                            </div>
                        </div>

                        <div className="place-item  mobile-place-item">
                            <img src="https://www.w3schools.com/w3images/paris.jpg" alt="Paris" className="place-img" />
                            <div className="place-body">
                                <h3 className="place-name">Paris</h3>
                                <p className="place-date">Sat 28 Nov 2016</p>
                                <p className="place-content">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                                <button 
                                    onClick={handleShowModal}
                                    className="btn-place-order">Buy Tickets</button>
                            </div>
                        </div>

                        <div className="place-item  mobile-place-item">
                            <img src="https://www.w3schools.com/w3images/sanfran.jpg" alt="San Francisco" className="place-img" />
                            <div className="place-body">
                                <h3 className="place-name">San Francisco</h3>
                                <p className="place-date">Sun 29 Nov 2016</p>
                                <p className="place-content">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                                <button
                                    onClick={handleShowModal} 
                                    className="btn-place-order">Buy Tickets</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
        <Modal ref={closed} />
        </Fragment>
    )
}

export default Content;