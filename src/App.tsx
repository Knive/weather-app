import React, { createContext, useCallback, useState } from 'react';
import './App.css';
import { AppContextType, Panel } from './lib/types';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Bookmarks } from './components/Bookmarks';

/**
 * App context just to change panels
 */
export const AppContext = createContext<AppContextType | undefined>(undefined)

function App() {

	const [panel, setPanel] = useState<Panel>(Panel.HOME)

	const Routes = useCallback(() => {
		switch(panel) {
			case Panel.HOME:
				return <Home />

			case Panel.BOOKMARKS:
				return <Bookmarks />
		}
	}, [panel])

	return (
		<AppContext.Provider value={{ panel, setPanel }}>
			<Layout>
				<Routes />
			</Layout>
		</AppContext.Provider>
	)
}

export default App;
