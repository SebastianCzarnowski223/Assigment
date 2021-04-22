import React, { useState, useEffect } from 'react'



const Character = ({ character, searchByName, charactersPageTwo }) => {
    const [showMoreInfo, setShowMoreInfo] = useState(false)
    const [movies, setMovies] = useState([])

    const { name, birth_year, gender, height, films, mass } = character;

    // changing api to set films titles

    let newFilms = () => films.map((film) => {
        fetch(film).then((response) => response.json())
            .then((data) => setMovies(prev => [...prev, data.title]))
        .catch((error) => console.log(error))
    })

    useEffect(() => {
        newFilms()
    }, [searchByName])


        return (
            <div className={!showMoreInfo ? "firstContainer" : "firstContainerAdvanced"}>
                <div className="names">
                    <h3>{name}</h3>
                    <p>Date of birth: {birth_year}</p>
                    <p>Gender: {gender}</p>
                    <p>Height: {height}</p>
                    {showMoreInfo && <div className="showMoreinfo">
                        <p>Mass: {mass}</p>
                        <p> Films: {movies.map((film) => {
                            return <p>{film}</p>
                        })}</p>
                    </div>}
                    <button className="btn" onClick={() => setShowMoreInfo(!showMoreInfo)}>
                        {!showMoreInfo ? 'show more' : 'Show less'}
                    </button>
                </div>
            </div>
        )
    
    
}



export default Character


