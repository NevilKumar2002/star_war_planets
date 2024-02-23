import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ResidentList from './ResidentList';

const PlanetCard = ({ planet }) => {
  // console.log('planet', planet)
  const [residents, setResidents] = useState([]);
  const [showResidents, setShowResidents] = useState(false);

  useEffect(() => {
    const fetchResidents = async () => {
      const residentPromises = planet.residents.map((residentUrl) =>
        axios.get(residentUrl)
      );

      try {
        const residentResponses = await Promise.all(residentPromises);
        const residentData = residentResponses.map((response) => response.data);
        setResidents(residentData);
      } catch (error) {
        console.error('Error fetching residents:', error);
      }
    };

    if (showResidents) {
      fetchResidents();
    }
  }, [planet.residents, showResidents]);

  const handleToggleResidents = () => {
    setShowResidents((prev) => !prev);
  };

  return (
    <div className="planet-card">
      <h2>{planet.name}</h2>
      <div className="planet-info">
    <span className="info-key">Climate:</span>
    <span className="info-value">{planet.climate}</span>
  </div>
  <div className="planet-info">
    <span className="info-key">Population:</span>
    <span className="info-value">{planet.population}</span>
  </div>
  <div className="planet-info">
    <span className="info-key">Terrain:</span>
    <span className="info-value">{planet.terrain}</span>
  </div>
  <button onClick={handleToggleResidents}>
    {showResidents ? 'Hide Residents' : 'Show Residents'}
  </button>
  {showResidents && <ResidentList residents={residents} />}
  </div>
  );
};

export default PlanetCard;


