
import './App.css';
import { useState, useEffect } from 'react';
import Navigation from './Movies'


function App() {

  const [data, setData] = useState();

  const URL1 = "https://65467038fe036a2fa955b0c7.mockapi.io/api/1/Movies"
  function getData() {
    fetch(URL1)
    .then(Response => Response.json())
    .then(data => setData(data))
  }
  useEffect(() =>{
  getData();
}, [])



  return (
    <div className="App">
      {data && data.map((Movies,index)=> {
      return (
        <div key={index}>
        <p>{Movies.Title}</p>
        <p>{Movies.synopsis}</p>
       <Navigation></Navigation>
        </div>
 
      )
      }
      )}
    </div>
  );
}

export default App;
