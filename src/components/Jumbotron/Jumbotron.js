import React from 'react';
import "./Jumbotron.css";


const Jumbotron = () => (
<div className="jumbotron jumbotron-fluid">
  <div className="container text-center">
    <h1 className="display-4">React-Click-Game!</h1>
    <p className="lead">Click on an Premier League team logo to gain points!</p>
    <p className="lead" >you cant click the same team twice</p>
  </div>
</div>
);

export default Jumbotron;