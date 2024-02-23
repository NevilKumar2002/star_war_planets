// App.js
// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlanetsPage from './pages/PlanetsPage';
import ResidentsPage from './pages/ResidentsPage';
import './App.css';

const App = () => {
  const [residentsList, setResidentsList] = useState([]);

  // Function to generate a random number within a given range
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  // Generate an array of stars
  const stars = Array.from({ length: 200 }, (_, index) => (
    <div
      key={index}
      className="star"
      style={{
        top: `${getRandomInt(0, 100)}vh`,
        left: `${getRandomInt(0, 100)}vw`,
        width: `${getRandomInt(1, 3)}px`,
        height: `${getRandomInt(1, 3)}px`,
        animationDuration: `${getRandomInt(2, 5)}s`,
      }}
    ></div>
  ));

  return (
    <Router>
      <div className="galaxy">
        {stars}
      </div>
      <Routes>
        <Route
          path="/"
          element={<PlanetsPage setResidentsList={setResidentsList} />}
        />
        <Route
          path="/residents/:planetName"
          element={<ResidentsPage residentsList={residentsList} />}
        />
      </Routes>
    </Router>
  );
};

export default App;


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import PlanetsPage from './pages/PlanetsPage';
// import ResidentsPage from './pages/ResidentsPage';
// import './App.css';

// const App = () => {
//   const [residentsList, setResidentsList] = useState([]);

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={<PlanetsPage setResidentsList={setResidentsList} />}
//         />
//         <Route
//           path="/residents/:planetName"
//           element={<ResidentsPage residentsList={residentsList} />}
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import PlanetsPage from './pages/PlanetsPage';
// import ResidentsPage from './pages/ResidentsPage';
// import './App.css';

// const App = () => {
//   const [residentsList, setResidentsList] = useState([]);

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={<PlanetsPage setResidentsList={setResidentsList} />}
//         />
//         <Route
//           path="/residents/:planetName"
//           element={<ResidentsPage residentsList={residentsList} />}
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



// import React from 'react';
// import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes} from 'react-router-dom';
// import PlanetsPage from './pages/PlanetsPage';
// import ResidentsPage from './pages/ResidentsPage';
// import "./App.css"

// function App() {
//   return (
//    <>
//     <BrowserRouter>
//     <Routes>
      
//       <Route path="/" exact component={<PlanetsPage />} />
//       <Route path="/residents/:planetName" component={ResidentsPage} />
    
//   </Routes>
//     </BrowserRouter>
   
//    </>
   
//   );
// }

// export default App;


// import React from 'react';
// import PlanetsPage from './pages/PlanetsPage';
// import './App.css'; // Assuming you have an App.css file for styling

// function App() {
//   return (
//     <div className="App">
//       <PlanetsPage />
//     </div>
//   );
// }

// export default App;



