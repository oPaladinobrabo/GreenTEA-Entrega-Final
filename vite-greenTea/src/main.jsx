import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import './site.css'

ReactDOM.render(
	<React.StrictMode>
		<Header />
		<Footer />
	</React.StrictMode>,
	document.getElementById('root')
)
