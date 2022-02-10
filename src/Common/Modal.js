import "../asset/css/common/modal.css"
import '../asset/Font/themify-icons/themify-icons.css';
import {forwardRef, useEffect, useState} from 'react';

function Modal(props, ref){
    useEffect(() =>{
        const closebtns = document.querySelectorAll('.js-handle-close');
        for(let el of closebtns){
            el.addEventListener('click', () =>{
                document.querySelector('.modal').classList.remove("open-modal");
            })
        }
        const modal = document.querySelector('.modal');
        modal.addEventListener('click', () =>{
            document.querySelector('.modal').classList.remove("open-modal");
        })

        document.querySelector('.modal-container').addEventListener('click', 
            (event) =>{event.stopPropagation()});
    }, [])
    return (
        <div className="modal" ref ={ref}>
            <div className="modal-container">

                <div className="modal-close js-handle-close">
                    <i className="icon-close ti-close" />
                </div>
                
                <header className="modal-header">
                    <i className="icon-header ti-bag"></i>
                    Tickets
                </header>

                <div className="modal-body">
                    <label htmlFor="tickets-quantity"
                             className="modal-label">
                        <i className="ti-shopping-cart"></i>
                        Tickets, $15 per person
                    </label>
                    <input type="text" 
                        id="tickets-quantity"
                        className="modal-input" 
                        placeholder ="How many?" />
                    
                    <label htmlFor="email" className="modal-label">
                        <i className="ti-user"></i>
                        Send to
                    </label>
                    <input type="text" 
                        id="email"
                        className="modal-input" 
                        placeholder ="Enter email" />

                    <button className="modal-pay">
                        Pay
                        <i className="icon-check-tickets ti-check"></i>
                    </button>
                </div>

                <footer className="modal-footer">
                    <button className="modal-close-btn js-handle-close">
                        Close
                        <i className="btn-close-icon ti-close"></i>
                    </button>
                   <p className="modal-help">Need <a href ="">Help?</a></p>
                </footer>

            </div>
        </div>
    )
}
export default forwardRef(Modal);