import React, { useState } from 'react'
import { Modal } from '../Modal'
import './Movie.css'

const IMG_API = "https://image.tmdb.org/t/p/w1280";

export function Movie(props) {
    const [modal, setModal] = useState(false);
    const [data, setData] = useState('')


    const toggleModal = () => {
        setModal(!modal);
    }
    const noImg = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
    return (
        <>
            <div className="movie">
                <img src={props.poster_path ? IMG_API + props.poster_path : `${noImg}`} alt={props.title}
                    onClick={() => {
                        setData({
                            title: props.title,
                            lang: props.original_language,
                            date: props.release_date,
                            count: props.vote_count
                        })
                        setModal(!modal)
                    }} />

                <div className="movie-info">
                    <h3>{props.title}</h3>
                    <span>{props.vote_average}</span>
                </div>

                <div className="movie-over">
                    <h2>Overview:</h2>
                    <p>{props.overview}</p>
                </div>
            </div>
            {modal && (
                <Modal toggleModal={toggleModal} data={data} />
            )
            }
        </>
    )
}
