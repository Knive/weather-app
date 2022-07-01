import { useCallback, useEffect, useState } from "react"
import { getCurrentPosition, getWeather } from "../lib/utils"
import { WeatherCard } from "./WeatherCard"

export function Home() {

	const [coords, setCoords] = useState<GeolocationCoordinates | null>(null)
	const [errMessage, setErrMessage] = useState<string | null>(null)
	const [weather, setWeather] = useState<Record<string, any>>({})

	useEffect(() => {
		getCurrentPosition(
			position => { setCoords(position.coords) },

			error => {
				// Display error based on the error code.
				const { code } = error;

				switch (code) {
					// User denied the request.
					case GeolocationPositionError.PERMISSION_DENIED:
						setErrMessage('No permission no chocolate :(')
						break;
					// Position not available or timed out
					case GeolocationPositionError.POSITION_UNAVAILABLE:
					case GeolocationPositionError.TIMEOUT:
						setErrMessage('Sorry, somehow Geolocation is unavailable :(')
						break;
				}
			}
		)
	}, [])

	const fetchWeather = useCallback(async (latitude: number, longitude: number) => {
		const data = await getWeather(latitude, longitude)
		setWeather(data)
	}, [])

	useEffect(() => {
		if (coords !== null) {
			const { latitude, longitude } = coords
			fetchWeather(latitude, longitude)
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [coords])

	/**
	 * Displays an error if there is one during geolocation fetch
	 */
	const ErrorDisplay = useCallback(() => {
		if (errMessage === null)
			return null

		return <div className="text-center">{errMessage}</div>
	}, [errMessage])

	return (
		<>
			<ErrorDisplay />
			<WeatherCard weather={weather} isCurrentLocation={true}/>
		</>
	)
}