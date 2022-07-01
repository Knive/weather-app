import { useEffect, useState } from "react"

export function BookmarkCard({ city }: { city: string }) {
	const [weather, setWeather] = useState<Record<string, any> | null>(null)

	useEffect(() => {
		// Fetch data
		// setWeather()
	}, [])

	// const { all necessary data } = weather

	return (
		<div className="bg-white rounded-2xl p-5">
			<div className="flex justify-between">
				<div>
					<div className="text-3xl font-semibold">{Math.round(Math.random() * 35 - 5)}°</div>
					<div className="text-base mt-2">{city}</div>
					<div className="text-sm text-slate-400">USA</div>
				</div>
				<div>
					Image
				</div>
			</div>
			<div className="flex justify-between mt-2">
				<div className="space-x-1 text-sm">
					<span>Icon</span>
					<span>17 %</span>
				</div>
				<div className="space-x-1 text-sm">
					<span>Icon</span>
					<span>7 km/h</span>
				</div>
			</div>
		</div>
	)
}