// WeatherContainer.tsx

import React from "react";
import { useWeather } from "../../hooks/useWeather"; // Adjust the import path as needed
import CurrentWeather from "../../components/CurrentWeather"; // Adjust the import path as needed

const WeatherContainer: React.FC = () => {
  // You might get the initialLocation and unit from your component's props or context
  const initialLocation = "YourLocation";
  const unit = "YourUnit";

  const { currentWeather, loading, error } = useWeather(initialLocation, unit);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <CurrentWeather weather={currentWeather} />;
};

export default WeatherContainer;
