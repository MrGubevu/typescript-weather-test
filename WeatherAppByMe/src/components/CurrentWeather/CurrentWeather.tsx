import React from 'react'
import {CurrentWeatherModel, SettingsModel} from '../../models'


type CurrentWeatherProps = {
    settings: SettingsModel;
    data: CurrentWeatherModel
} 

export const CurrentWeather = ({settings, data}: CurrentWeatherProps) => {
    const unitSymbol = settings.unit === "metric" ? "C" : "F";

    return(
        <div className="current-weather">

            <div className="details">
                <label className="details">
                {Math.round(data.temp)}°<span>{unitSymbol}</span>
                </label>
                <label className="feelslike">
                    Feels like: <span>{Math.round(data.feels_like)}°</span>
                </label>
                <label className="description">{data.weather.description}</label>
            </div>
        </div>
    );
};

export default CurrentWeather
