import { Dispatch, SetStateAction } from "react"

export enum Panel {
	HOME = 'HOME',
	BOOKMARKS = 'BOOKMARKS'
}

export type AppContextType = {
	panel: Panel
	setPanel: Dispatch<SetStateAction<Panel>>
}