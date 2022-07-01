/**
 * Get user's current position
 * @param successCallback Success callback
 * @param errorHandler Error callback
 */
export function getCurrentPosition(successCallback: PositionCallback, errorHandler: PositionErrorCallback) {

	var options = {
		enableHighAccuracy: true,
		timeout: 10000,
		maximumAge: 1000 * 60 * 2
	};

	navigator.geolocation.getCurrentPosition(successCallback, errorHandler, options)
}

/**
 * Get the weather for a location
 * @param lat Latitude
 * @param lon Longitude
 * @returns Weather data
 */
export async function getWeather(lat: number, lon: number): Promise<Record<string, any>> {

	let apiKey = process.env.REACT_APP_API_KEY
	let lang = 'en'
	let units = 'metric'
	let url = process.env.REACT_APP_API_URL + `onecall?lat=${lat}&lon=${lon}&units=${units}&lang=${lang}&appid=${apiKey}`

	const response = await fetch(url)
	if (!response.ok)
		throw new Error(response.statusText);

	return await response.json();
}