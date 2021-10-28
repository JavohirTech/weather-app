import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_Key = '7e35ec742e34e0127335c0d0a4891f09'

export const fetchWeather = async (query)=>{
	const {data} = await axios.get(URL, {
		params: {
			q: query,
			units: 'metric',
			APPID: API_Key,
		}
	});

	return data;
}

