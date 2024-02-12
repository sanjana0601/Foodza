import React from "react";
import Cart from "./screens/Cart";
import Navbar from "./components/Navbar";
import Profile from "./screens/Profile";
import Home from "./screens/Home";
import "../src/styles/App.css"
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Provider } from "react-redux";
// import Prvider from "./Redux/Provider";

function App() {
  return (
    <>
  {/* <Provider> */}
    
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Signup" element={<Signup/>} />
        </Routes>
      </Router>
     
    </div>
  {/* </Provider> */}
    </>
  );
}

export default App;