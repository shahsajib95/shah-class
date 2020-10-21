import React, { useState, createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import Headerblack from './Component/Header/Headerblack';
import fakeData from '../src/Component/fakeData'
import Booking from './Component/Booking/Booking';
import Login from './Component/Login/Login';
import Privateroute from './Privateroute';
import Infopage from './Component/Infopage/Infopage';


export const BookContext = createContext();
export const UserContext = createContext();
export const BookedContext =  createContext()
function App() {
 
  const [book, setBook] = useState(fakeData)
  const [booked, setBooked] = useState([])
  const [loggedIn, setLoggedIn] = useState({});

  const handleBook = (booking)  =>{
    setBooked(booking)
  }
  return (
    <div className="App">
      <BookedContext.Provider value={[booked, setBooked]}>
      <UserContext.Provider value={[loggedIn, setLoggedIn]}>
      <BookContext.Provider value={[book, setBook]}> 
      <Router>
        <Switch>
          <Route exact path="/">
            <Header/>
            <Home handleBook={handleBook}/>
          </Route>
          <Route path="/booking">
            <Header/>
            <Booking  booked={booked}></Booking>
          </Route>
          <Privateroute path="/book-hotel">
            <Headerblack/>
            <Infopage/>
          </Privateroute>
          <Route path="/login"> 
            <Headerblack/>
            <Login/>
          </Route>
        </Switch>
      </Router>
      </BookContext.Provider>
      </UserContext.Provider>
      </BookedContext.Provider>
      </div>
     )
}
export default App;
