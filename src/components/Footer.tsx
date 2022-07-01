import { useContext } from "react"
import { AppContext } from "../App"
import { Panel } from "../lib/types"

/**
 * Footer of the app (well, it could have been named the Navbar)
 */
export function Footer() {

	const context = useContext(AppContext)

	return (
		<div className="flex absolute bottom-0 space-x-20 w-full h-[80px] items-center justify-center text-2xl">
			{/* HOME */}
			<svg
				onClick={() => context?.setPanel(Panel.HOME)}
				className={(context?.panel !== Panel.HOME ? 'text-slate-300' : '') + ' cursor-pointer'}
				stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
			>
				<path strokeWidth="2" d="M1 22V9.76a2 2 0 01.851-1.636l9.575-6.72a1 1 0 011.149 0l9.574 6.72A2 2 0 0123 9.76V22a1 1 0 01-1 1h-5.333a1 1 0 01-1-1v-5.674a1 1 0 00-1-1H9.333a1 1 0 00-1 1V22a1 1 0 01-1 1H2a1 1 0 01-1-1z"></path>
			</svg>

			{/* BOOKMARKS */}
			<svg
				onClick={() => context?.setPanel(Panel.BOOKMARKS)}
				className={(context?.panel !== Panel.BOOKMARKS ? 'text-slate-300' : '') + ' cursor-pointer'}
				stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
				<path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path>
			</svg>
		</div>
	)
}