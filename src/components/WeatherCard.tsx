export function WeatherCard({ weather, isCurrentLocation, onAdd }: {
	weather: Record<string, any>,
	isCurrentLocation: Boolean,
	onAdd?: Function
}) {

	const name = isCurrentLocation ? 'Current Location' : weather?.name
	const zone = isCurrentLocation ? weather?.timezone : weather.sys.country
	const temp = Math.round(isCurrentLocation ? weather?.current?.temp : weather.main.temp)
	const weatherTag = isCurrentLocation ? weather?.current?.weather[0]?.main : weather.weather[0].main
	const icon = isCurrentLocation ? weather?.current?.weather[0]?.icon : weather.weather[0].icon
	const humidity = isCurrentLocation ? weather?.current?.humidity : weather.main.humidity
	const pressure = isCurrentLocation ? weather?.current?.pressure : weather.main.pressure
	const windSpeed = isCurrentLocation ? weather?.current?.wind_speed : weather.wind.speed

	// Check if already bookmarked
	const bookmarks = localStorage.getItem('weather-app-bookmarks')

	let bookmarked = isCurrentLocation ? true : false
	if (bookmarks && !isCurrentLocation)
		bookmarked = JSON.parse(bookmarks).includes(name)

	return (
		<div className="px-10 bg-white pb-5 rounded-3xl">

			{/* Main informations */}
			<div className="flex justify-between items-center">
				<div>
					<div className="">{name}</div>
					<div className="text-sm text-slate-400">{zone}</div>
					{temp && <div className="text-6xl font-semibold my-2">{temp}°</div>}
					<span className="rounded-lg bg-gray-200 px-2">{weatherTag}</span>
				</div>
				<div>
					{!bookmarked && <button
						className="text-white bg-gray-600 hover:bg-rose-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 mt-4 float-right"
						onClick={() => {
							const newBookmarks = bookmarks ? [...JSON.parse(bookmarks), name] : [name]
							localStorage.setItem('weather-app-bookmarks', JSON.stringify(newBookmarks))
							onAdd?.()
						}}
					>
						Add
					</button>}
					{icon && <img src={process.env.REACT_APP_IMAGES_URL + `${icon}@4x.png`} alt={weatherTag} />}
				</div>
			</div>

			{/* Humidity, pressure and wind speed */}
			<div className="flex justify-between mt-2">
				<div className="flex space-x-1 text-sm items-center">
					<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
						<path d="M406.043 316c24.11 96.443-50.59 180-150 180s-174.405-82.38-150-180c15-60 90-150 150-300 60 150 135 240 150 300z"></path>
					</svg>
					<span>{humidity} %</span>
				</div>
				<div className="flex space-x-1 text-sm items-center">
					<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><desc></desc><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><circle cx="12" cy="12" r="1"></circle><line x1="13.41" y1="10.59" x2="16" y2="8"></line><path d="M7 12a5 5 0 0 1 5 -5"></path></svg>
					<span>{pressure} hPa</span>
				</div>
				<div className="flex space-x-1 text-sm items-center">
					<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
						<path d="M13 5.5C13 3.57 11.43 2 9.5 2 7.466 2 6.25 3.525 6.25 5h2c0-.415.388-1 1.25-1 .827 0 1.5.673 1.5 1.5S10.327 7 9.5 7H2v2h7.5C11.43 9 13 7.43 13 5.5zm2.5 9.5H8v2h7.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5c-.862 0-1.25-.585-1.25-1h-2c0 1.475 1.216 3 3.25 3 1.93 0 3.5-1.57 3.5-3.5S17.43 15 15.5 15z"></path><path d="M18 5c-2.206 0-4 1.794-4 4h2c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2H2v2h16c2.206 0 4-1.794 4-4s-1.794-4-4-4zM2 15h4v2H2z"></path>
					</svg>
					<span>{windSpeed} km/h</span>
				</div>
			</div>

		</div>
	)
}