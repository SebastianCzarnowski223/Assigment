import React from 'react'

const NavBar = ({setSearchByName}) => {
// whole navbar
    return (
        <div className="navbar">
            <div className="container">
                <input type="text" placeholder="Search by name" onChange={event => {setSearchByName(event.target.value)}}/>
            </div>
        </div>
    )
}





export default NavBar