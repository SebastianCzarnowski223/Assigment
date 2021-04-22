import React, { useState, useEffect } from 'react'



const CharacterSecond = ({  searchByName, charactersPageTwo }) => {
    const [showMoreInfoPageTWo, setShowMoreInfoPageTwo] = useState(false)
    const [moviePageTwo, setMoviesPageTwo] = useState([])

    const { name, birth_year, gender, height, films, mass } = charactersPageTwo;

    

    let newFilms = () => films.map((film) => {
        fetch(film).then((response) => response.json())
            .then((data) => setMoviesPageTwo(prev => [...prev, data.title]))
        .catch((error) => console.log(error))
    })

    useEffect(() => {
        newFilms()
    }, [searchByName])


        return (
            <div className={!showMoreInfoPageTWo ? "firstContainer" : "firstContainerAdvanced"}>
                <div className="names">
                    <h3>{name}</h3>
                    <p>Date of birth: {birth_year}</p>
                    <p>Gender: {gender}</p>
                    <p>Height: {height}</p>
                    {showMoreInfoPageTWo && <div className="showMoreinfo">
                        <p>Mass: {mass}</p>
                        <p> Films: {moviePageTwo.map((film) => {
                            return <p>{film}</p>
                        })}</p>
                    </div>}
                    <button className="btn" onClick={() => setShowMoreInfoPageTwo(!showMoreInfoPageTWo)}>
                        {!showMoreInfoPageTWo ? 'show more' : 'Show less'}
                    </button>
                </div>
            </div>
        )
    
    
}



export default CharacterSecond