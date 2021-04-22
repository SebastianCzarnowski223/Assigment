import './App.css';
import React, { useState, useEffect } from 'react'
import Navbar from './Components/navbar'
import Characters from './Components/Characters'
import ClipLoader from "react-spinners/RingLoader";


function App() {
  const url = "https://swapi.dev/api/people/?page=1"
  const url2 = "https://swapi.dev/api/people/?page=2"
  const [characters, setCharacters] = useState([])
  const [charactersPageTwo, setCharactersPageTwo] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchByName, setSearchByName] = useState('')


  // fetching data for page 1


  const fetchingData = () => {
    fetch(url).then((promise) => promise.json())
      .then(data => {
        setCharacters(data.results)
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      })
      .catch((error) => {
        setLoading(true)
        console.log(error)
    })
  }

   // fetching data for page 2 
  
  const fetchingDataSecondSide = () => {
    fetch(url2).then((promise) => promise.json())
      .then(data => {
        setCharactersPageTwo(data.results)
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      })
      .catch((error) => {
        setLoading(true)
        console.log(error)
    })
  }

  useEffect(() => {
    fetchingData();
    fetchingDataSecondSide();
  }, [])

  // condition if loading

  if (loading) {
    return (<main className='spinner'>
       <ClipLoader color={'#F5A623'} loading={loading} size={150} />
       <div className="loading">Niech moc będzie z tobą padawanie!</div>
    </main>)
  }

// if not loading

  return (
    <div className="main">
      <Navbar setSearchByName={setSearchByName}/>
      <Characters characters={characters} searchByName={searchByName} charactersPageTwo={charactersPageTwo}/>
    </div>
  );
}

export default App;
