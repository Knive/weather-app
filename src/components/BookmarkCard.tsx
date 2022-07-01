export function BookmarkCard({ weather }: { weather: Record<string, any> }) {

	return (
		<div className="bg-white rounded-2xl p-5 overflow-clip">

			{/* Main informations */}
			<div className="flex justify-between">
				<div>
					<div className="text-3xl font-semibold">{Math.round(weather.main.temp)}°</div>
					<div className="text-base mt-2">{weather.name}</div>
					<div className="text-sm text-slate-400">{weather.sys.country}</div>
				</div>
				<img src={process.env.REACT_APP_IMAGES_URL + `${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].main}/>
			</div>

			{/* Humidity and wind speed */}
			<div className="flex justify-between mt-2">
				<div className="flex space-x-1 text-sm items-center">
					<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
						<path d="M406.043 316c24.11 96.443-50.59 180-150 180s-174.405-82.38-150-180c15-60 90-150 150-300 60 150 135 240 150 300z"></path>
					</svg>
					<span>{weather.main.humidity} %</span>
				</div>
				<div className="flex space-x-1 text-sm items-center">
					<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
						<path d="M13 5.5C13 3.57 11.43 2 9.5 2 7.466 2 6.25 3.525 6.25 5h2c0-.415.388-1 1.25-1 .827 0 1.5.673 1.5 1.5S10.327 7 9.5 7H2v2h7.5C11.43 9 13 7.43 13 5.5zm2.5 9.5H8v2h7.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5c-.862 0-1.25-.585-1.25-1h-2c0 1.475 1.216 3 3.25 3 1.93 0 3.5-1.57 3.5-3.5S17.43 15 15.5 15z"></path><path d="M18 5c-2.206 0-4 1.794-4 4h2c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2H2v2h16c2.206 0 4-1.794 4-4s-1.794-4-4-4zM2 15h4v2H2z"></path>
					</svg>
					<span>{weather.wind.speed} km/h</span>
				</div>
			</div>
		</div>
	)
}