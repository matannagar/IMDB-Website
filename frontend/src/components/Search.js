import React, { useState } from 'react'

function Search({ handleOnSubmit, searchM, handleOnChange }) {
    return (
        <header>
            <form onSubmit={handleOnSubmit}>
                <input className="search"
                    type="search"
                    value={searchM}
                    onChange={handleOnChange}
                    placeholder="search..." />

            </form>
        </header>
    )
}

export default Search
