import React from 'react';
import '../App.css'

const ResidentCard = ({ resident }) => (
  <div className="resident-card">
    <h4 className="resident-name">{resident.name}</h4>
    <div className="resident-details">
      <p className="resident-info">Height: {resident.height} Cm</p>
      <p className="resident-info">Mass: {resident.mass} Kg</p>
      <p className="resident-info">Gender: {resident.gender}</p>
    </div>
  </div>
);

export default ResidentCard;

 
