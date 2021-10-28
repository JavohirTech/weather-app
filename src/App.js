import React, { useState } from 'react'
import { fetchWeather } from './api/fetchWeather'
import {Card, CardBody, CardHeader, CardFooter} from 'reactstrap'
// eslint-disable-next-line no-template-curly-in-string
// const icons = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`

const App = ()=>{

	const [query, setQuery] = useState('');
	const [weather, setWeather] = useState({});

	const search = async(e) => {
		if(e.key === 'Enter') {
			const data = await fetchWeather(query)
			setWeather(data);
			setQuery('');

		}
	}

	return (
		<div className='container p-5 text-center'>
					<input type="text" className='form-control search py-3' placeholder='Searching...'value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress = {search}/>
					{weather.main && (
						<Card style={{marginTop: '10%'}}>
							<CardHeader  style={{background:'transparent'}}>
								
							</CardHeader>
							<CardBody>
								
									<h1>{weather.name.toUpperCase()}</h1>
								<h5 className='bg-success text-white'>{weather.sys.country}</h5>
										<span style={{fontSize: '30px'}}>{Math.round(weather.main.temp)}
									<sup>&deg; C</sup></span>
									<img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} className='' alt={weather.weather[0].description}/>

									<p>{weather.icon}</p>

										<p>⤴️Max Temperature (Baland) : {Math.round(weather.main.temp_max)}</p><br />
										<p>⤵️Min Temperature (Past) : {Math.round(weather.main.temp_min)}</p><br />
										<p>⏲Pressure (bosim) : {Math.round(weather.main.pressure)}</p><br />
										<p>🌬Wind speed (shamol tezligi) : {Math.round(weather.wind.speed)}</p><br />

										<p>🌬Wind degree (shamol darajasi) : {Math.round(weather.wind.deg)}</p><br />
										<p>{weather.icon}</p>
							</CardBody>
							<CardFooter>
								<small>🔥 Powered By Javohir G'ulomjonov</small>
							</CardFooter>
						</Card>
						)}
		</div>
	)
}

export default App