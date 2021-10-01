import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Pics from './Pics';
import './App.css';
import Header from './Header';
import Like from './Like';

const FEATURED_API = 'https://picsum.photos/v2/list?page=2&limit=50'


function App() {

  const [pics, setPics] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPics(data)
      });
  }, []);


  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/">
            <Header />
            <input type="text" placeholder="Search pics by author name" onChange={(e) => setSearchTerm(e.target.value)} />
            <div className="Pics__container">
              {
                pics?.filter((val) => {
                  if (searchTerm === "") {
                    return val
                  } else if (val.author.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val;
                  }
                }).map((list) => (
                  <Pics key={list.id} {...list} />
                ))}
            </div>
          </Route>

          <Route exact path="/like">
            <Header />
            <Like />
          </Route>
        </Switch>
      </>
    </Router >

  );
}

export default App;
