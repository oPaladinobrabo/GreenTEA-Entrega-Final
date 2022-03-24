import React from 'react'
import { useEffect } from 'react'
import './Animated-Type-Heading.css'

const Sobre = () => {
	useEffect(() => {
		const script = document.createElement('script')
		script.src = 'assets/js/Animated-Type-Heading.js'
		script.async = true
		document.body.appendChild(script)
		return () => {
			document.body.removeChild(script)
		}
	}, [])

	return (
		<div>
			<hr />
			<br />
			<div className="container bg-white">
				<div className="">
					<div className="caption v-middle text-center">
						<h1 className="cd-headline clip">
							<span className="blc">Nós somos | </span>
							<span className="cd-words-wrapper">
								<b className="is-visible">front end.</b>
								<b>back end.</b>
								<b>Power Ranger.</b>
								<b>A Equipe 13.</b>
							</span>
						</h1>
					</div>
					<div className="d-flex justify-content-center mb-5">
						<img
							className=""
							src="https://i.ibb.co/YftZTmf/grupo.png"
							style={{ width: '90%' }}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Sobre
