import React from 'react'
import './Modal.css'

function Modal({ toggleModal, data }) {

    return (
        <div className="modal" onClick={toggleModal}>
            <div className="overlay" onClick={toggleModal}></div>
            <div className="modal-content">
                <span className="close-modal" onClick={toggleModal}>&times;</span>
                <h2>{data.title}</h2>
                <p>Language: {data.original_language}</p>
                <p>Release data: {data.release_date}</p>
                <p>Total votes: {data.vote_count}</p>

            </div>
        </div>
    )
}

export default Modal
