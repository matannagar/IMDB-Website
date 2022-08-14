import React, { useState } from 'react'
import './Modal.css'

function Modal({ toggleModal }) {

    return (
        <div className="modal" onClick={toggleModal}>
            <div className="overlay" onClick={toggleModal}></div>
            <div className="modal-content">
                <span class="close-modal" onClick={toggleModal}>&times;</span>
                <p>Some text in the Modal..</p>
            </div>
            {/* <button className='close-modal'
                onClick={toggleModal}>CLOSE</button> */}
        </div>
    )
}

export default Modal
