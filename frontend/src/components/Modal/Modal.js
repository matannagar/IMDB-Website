import React from 'react'
import './Modal.css'

export function Modal({ toggleModal, data }) {

    return (
        <div className="modal" onClick={toggleModal}>
            <div className="overlay" onClick={toggleModal}></div>
            <div className="modal-content">
                <span className="close-modal" onClick={toggleModal}>&times;</span>
                <div className='information'>
                    <h2>{data.title}</h2>
                    <p>Language: {data.lang}</p>
                    <p>Release date: {data.date}</p>
                    <p>Total votes: {data.count}</p>
                </div>
            </div>
        </div>
    )
}

