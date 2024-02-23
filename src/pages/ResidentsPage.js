// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';
// import ResidentList from '../components/ResidentList';
// import "../App.css";

// const ResidentsPage = () => {
//   const location = useLocation();
//   const planetName = decodeURIComponent(location.pathname.split('/').pop());

//   const [residents, setResidents] = useState([]);

//   useEffect(() => {
//     const fetchResidents = async () => {
//       try {
//         const planetResponse = await axios.get(`https://swapi.dev/api/planets/?search=${planetName}`);
//         const planet = planetResponse.data.results[0];
//         const residentPromises = planet.residents.map(residentUrl => axios.get(residentUrl));
//         const residentResponses = await Promise.all(residentPromises);
//         const residentData = residentResponses.map(response => response.data);
//         setResidents(residentData);
//       } catch (error) {
//         console.error('Error fetching residents:', error);
//       }
//     };

//     fetchResidents();
//   }, [planetName]);

//   return (
//     <div className="residents-page">
//       <h1>Residents Page of {planetName}</h1>
//       <div className='resident-cards-container'>
//       {residents.length > 0 ? (
//         <ResidentList residents={residents} />
//       ) : (
//         <p>No residents available for this planet</p>
//       )}
//       </div>
//     </div>
//   );
// };

// export default ResidentsPage;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import ResidentList from '../components/ResidentList';
import '../App.css';
import LoadingSpinner from '../components/Loading';

const ResidentsPage = () => {
  const location = useLocation();
  const planetName = decodeURIComponent(location.pathname.split('/').pop());

  const [residents, setResidents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResidents = async () => {
      try {
        setLoading(true);
        const planetResponse = await axios.get(`https://swapi.dev/api/planets/?search=${planetName}`);
        const planet = planetResponse.data.results[0];

        if (planet.residents.length > 0) {
          const residentPromises = planet.residents.map(residentUrl => axios.get(residentUrl));
          const residentResponses = await Promise.all(residentPromises);
          const residentData = residentResponses.map(response => response.data);
          setResidents(residentData);
        } else {
          setResidents([]);
        }
      } catch (error) {
        console.error('Error fetching residents:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResidents();
  }, [planetName]);

  return (
    <div className="residents-page">
      <h1>Residents Page of {planetName}</h1>
      <div className='resident-cards-container'>
        {loading ? (
                    <LoadingSpinner />
                    // <p>Loading...</p>
        ) : (
          residents.length > 0 ? (
            <ResidentList residents={residents} />
          ) : (
            <p>No residents available for this planet</p>
          )
        )}
      </div>
    </div>
  );
};

export default ResidentsPage;


