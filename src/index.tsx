import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './provider/ThemeProvider'
import { Provider } from 'react-redux'
import { store } from './store/Store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</Router>
		</Provider>
	</React.StrictMode>
)
