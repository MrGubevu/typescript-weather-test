import {CurrentWeatherDetailsModel } from "../models/CurrentWeatherDetailsModel";import { EmptyWeather, WeatherModel } from "./WeatherModel";
1



export interface CurrentWeatherModel {
    dt: number;
    weather: WeatherModel;
    temp: number;
    feels_like: number;
    details?: CurrentWeatherDetailsModel;
}

export const EmptyCurrentweather: CurrentWeatherModel = {
    dt: 0,
    weather: EmptyWeather,
    temp: 0,
    feels_like: 0,
    details: undefined,
}