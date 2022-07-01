import { useCallback, useEffect, useState } from "react"
import { getCityWeather } from "../lib/utils"
import { BookmarkCard } from "./BookmarkCard"

export function Bookmarks() {
	const [cities, setCities] = useState<Array<string>>([])
	const [weathers, setWeathers] = useState<Record<string, any>>({})

	useEffect(() => {
		let bookmarks = localStorage.getItem('weather-app-bookmarks')
		if (bookmarks)
			setCities(JSON.parse(bookmarks))
	}, [])

	const fetchWeathers = useCallback(async () => {

		await Promise.all(
			cities.map(async city => {
				weathers[city] = await getCityWeather(city)
			})
		)

		setWeathers({ ...weathers })
	}, [cities, weathers])

	useEffect(() => {
		fetchWeathers()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cities])

	return (
		<>
			<div className="relative mb-5">
				<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
					<svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
					</svg>
				</div>
				<input
					type="search"
					id="search"
					className="block p-4 pl-10 w-full text-sm rounded-lg"
					placeholder="Search Cities"
				/>
				<button
					type="submit"
					className="text-white absolute right-2.5 bottom-2.5 bg-rose-600 hover:bg-rose-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
				>
					Search
				</button>
			</div>

			<div className="grid grid-cols-2 auto-rows-max gap-4">
				{
					Object.keys(weathers).map(city => <BookmarkCard key={city} weather={weathers[city]} />)
				}
			</div>
		</>
	)
}