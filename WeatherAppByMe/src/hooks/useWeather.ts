import { useEffect, useState } from "react";
import axios from "axios";
import { CurrentWeatherModel, EmptyCurrentweather } from "../models";
// import { CurrentWeatherDetailsModel } from "../models/CurrentWeatherDetailsModel"

export const useWeather = (initialLocation: string, unit: string) => {
  // Define your API endpoint here
  const API_ENDPOINT: string = "YOUR_API_ENDPOINT_HERE";

  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherModel>(EmptyCurrentweather);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // Fetch weather data function
  const fetchWeatherData = async (location: string) => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_ENDPOINT}?location=${location}`);
      // Process and set the data using helper functions
      processCurrent(response.data.current);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  // Call fetchWeatherData when the component mounts or when the location changes
  useEffect(() => {
    if (initialLocation) {
      fetchWeatherData(initialLocation);
    }
  }, [initialLocation]);

  // Helper function to process and set the current weather data
  const processCurrent = (data: any) => {
    setCurrentWeather({
      // Process and structure the data here
      // For example, extract and format relevant information
      dt: data.dt,
      weather: {
        icon: data.weather[0].icon,
        description: data.weather[0].description,
      },
      temp: data.temp,
      feels_like: data.feels_like,
      details: {
        rain: 0,
        visibility: data.visibility / 1000,
        humidity: data.humidity,
        pressure: data.pressure,
        wind_speed: data.wind_speed,
      },
    });
  };

  return { currentWeather, loading, error };
};
