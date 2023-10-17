// App.tsx

import React from "react";
import WeatherContainer from "./components/WeatherContainer"; // Adjust the import path as needed

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
      <main>
        <WeatherContainer />
      </main>
    </div>
  );
};

export default App;
