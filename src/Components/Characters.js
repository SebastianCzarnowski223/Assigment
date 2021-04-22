import React, { useState, useEffect } from 'react'
import Character from './Character'
import CharacterSecond from "./CharacterSecond"
import Aos from 'aos'
import 'aos/dist/aos.css'



const Characters = ({ characters, searchByName, charactersPageTwo }) => {

    useEffect(() => {
        Aos.init({duration: 1000, disabled: 'mobile'})
    }, [])
    
    return (
        // return from the first page of characters
        <>
        <div className="characters">
            <div className="containerCharacter">
                {characters.filter((value) => {
                    if (searchByName == "") {
                        return value
                    } else if (value.name.toLowerCase().includes(searchByName.toLowerCase())) {
                          return value  
                    }
                }).map((character) => {
                    let lossId = Math.random() * 2000
                    return (
                        <Character key={lossId} character={character} searchByName={searchByName}/>
                    )
                })}
                </div>
            </div>

            {/* return of the second page */}

                
          <div className="charactersSecond" data-aos="fade-up">
            <div className="containerCharacter">
                {charactersPageTwo.filter((value) => {
                    if (searchByName == "") {
                        return value
                    } else if (value.name.toLowerCase().includes(searchByName.toLowerCase())) {
                          return value  
                    }
                }).map((charactersPageTwo) => {
                    let lossId = Math.random() * 2000
                    return (
                        <CharacterSecond key={lossId} charactersPageTwo={charactersPageTwo} searchByName={searchByName}/>
                    )
                })}
            </div>
            </div>
            </>
    )
}

export default Characters