import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";

function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let {info, results} = fetchedData;
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    (async function() {
      let data = await fetch(api).then(res => res.json())
      console.log(data.results);
      updateFetchedData(data);
    }) ()
  },[api])

  return (
    <div className="App">
      <h1 className="text-center poppins my-5">RICK & MORTY</h1>

      <Filters />

      <div className="container text-center my-4">
        <div className="row justify-content-center align-items-center">
           <Cards results={results}/>
        </div>
      </div>
      
      <Pagination setPageNumber={setPageNumber}/>
      
    </div>
  );
}

export default App;
