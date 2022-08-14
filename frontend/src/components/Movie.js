import React, { useState } from 'react'
import Modal from './Modal/Modal'
const IMG_API = "https://image.tmdb.org/t/p/w1280";

function Movie({ title, poster_path, overview, vote_average }) {
    const [modal, setModal] = useState(false);
    const [data, setData] = useState('nothing')


    const toggleModal = () => {
        setModal(!modal);
    }
    const noImg = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
    return (
        <>
            <div className="movie">
                <img src={poster_path ? IMG_API + poster_path : `${noImg}`} alt={title}
                    onClick={() => {
                        // setData(data)
                        setModal(!modal)
                    }} />

                <div className="movie-info">
                    <h3>{title}</h3>
                    <span>{vote_average}</span>
                </div>

                <div className="movie-over">
                    <h2>Overview:</h2>
                    <p>{overview}</p>
                </div>
            </div>
            {modal && (
                <Modal toggleModal={toggleModal} />
            )
            }
        </>
    )
}

export default Movie
