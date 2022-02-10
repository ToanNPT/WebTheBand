import '../asset/css/common/content.css';
import '../asset/css/common/contact.css';
import {Fragment} from 'react';
function Contact(){
    return(
        <Fragment>
        <div id ="content">
            <div className="content-section">
                <h2 className="section-heading">CONTACT</h2>
                <p className="sub-heading-section">Fan? Drop a note!</p>

                <div className="row contact-container">
                    <div className="col col-half contact-info">
                        <p>
                            <i className="contact-icon ti-location-pin" />
                            Chicago, US
                        </p>
                        <p>
                            <i className="contact-icon ti-mobile" />
                            Phone: +00 151515
                        </p>
                        <p>
                            <i className="contact-icon ti-email" />
                            Email: mail@mail.com
                        </p>
                    </div>

                    <div className="col col-half contact-form">
                        <form action="">
                            <div className="row">
                                <div className="col col-half">
                                    <input type="text" name="" required id="" className="form-control" placeholder="Name"/>
                                </div>
                                <div className="col col-half">
                                    <input type="email" required name="" id="" className="form-control" placeholder="Email"/>
                                </div>
                            </div>
                            <div className="row mt-8">
                                <div className="col col-full">
                                    <input type="text" name="" id="" className="form-control" placeholder="Message"/>
                                </div>
                            </div>
                            <input className="form-submit-btn" type="submit" value="SEND" />
                        </form>
                    </div>

                </div>
            </div>

        </div>

        <div className="map-section">
            <img src="https://www.w3schools.com/w3images/map.jpg" alt="Map" />
        </div>
        </Fragment>
    )
}

export default Contact