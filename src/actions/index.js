import axios from 'axios';

// const API_KEY = 'bdc1f69a5b031d625d61ff753e33bd11';
const API_KEY = '75e2e0c1da06fa15b84b5c24ba996f9b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    // const request = fetch(url);
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}