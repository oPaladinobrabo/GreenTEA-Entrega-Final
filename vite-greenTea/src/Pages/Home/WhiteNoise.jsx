import React from 'react'
import Audio from 'react-audio-player'

const WhiteNoise = () => {
	return (
		<div>
			<hr />
			<br />
			<div className="page gallery-page">
				<section className="clean-block clean-gallery dark">
					<div className="container">
						<div className="block-heading">
							<h1 className="text-info">White Noise</h1>
							<p>
								Escolha um tipo de som para ser ouvido como barulho de fundo.
							</p>
						</div>
						<div
							className=""
							style={{ alignItems: 'center', justifyContent: 'center' }}
						>
							<fieldset className="radio-image row d-flex">
								<div className="col-12 col-sm-6 col-md-4 col-lg-3  mb-2 rounded-lg d-flex wrap justify-content-center">
									<div style={{ width: '170', position: 'relative' }}>
										<label htmlFor="w3">
											<input
												type="button"
												name="w-noise"
												id="w3"
												className=" text-center"
											/>
											<img src="https://i.ibb.co/wQcQ4MB/rain-1.png" />
											<span>Chuva</span>
										</label>
										<Audio
											style={{ maxWidth: 170, marginLeft: '14px' }}
											src="assets/whiteNoises/Chuva.mp3"
											controls
											loop
										/>
									</div>
								</div>

								<div className="col-12 col-sm-6 col-md-4 col-lg-3  mb-2 rounded-lg d-flex wrap justify-content-center">
									<div style={{ width: '170', position: 'relative' }}>
										<label htmlFor="w4">
											<input
												type="button"
												name="w-noise"
												id="w4"
												className=" text-center"
											/>
											<img src="https://i.ibb.co/NY7nYzb/cascata.png" />
											<span>Cascata</span>
										</label>
										<Audio
											style={{ maxWidth: 170, marginLeft: '14px' }}
											src="assets/whiteNoises/Cascata.mp3"
											controls
											loop
										/>
									</div>
								</div>

								<div className="col-12 col-sm-6 col-md-4 col-lg-3  mb-2 rounded-lg d-flex wrap justify-content-center">
									<div style={{ width: '170', position: 'relative' }}>
										<label htmlFor="w5">
											<input
												type="button"
												name="w-noise"
												id="w5"
												className=" text-center"
											/>
											<img src="https://i.ibb.co/LRqXNFP/onda.png" />
											<span>Ondas</span>
										</label>
										<Audio
											style={{ maxWidth: 170, marginLeft: '14px' }}
											src="assets/whiteNoises/Mar.mp3"
											controls
											loop
										/>
									</div>
								</div>

								<div className="col-12 col-sm-6 col-md-4 col-lg-3  mb-2 rounded-lg d-flex wrap justify-content-center">
									<div style={{ width: '170', position: 'relative' }}>
										<label htmlFor="w6">
											<input
												type="button"
												name="w-noise"
												id="w6"
												className=" text-center"
											/>
											<img src="https://i.ibb.co/7kKHqgz/chuveiro.png" />
											<span style={{ left: '40' }}>Chuveiro</span>
										</label>
										<Audio
											style={{ maxWidth: 170, marginLeft: '14px' }}
											src="assets/whiteNoises/Chuveiro.mp3"
											controls
											loop
										/>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-md-4 col-lg-3  mb-2 rounded-lg d-flex wrap justify-content-center">
									<div style={{ width: '170', position: 'relative' }}>
										<label htmlFor="w9">
											<input
												type="button"
												name="w-noise"
												id="w9"
												className=" text-center"
											/>
											<img src="https://i.ibb.co/Kw21tZ0/gravida.png" />
											<span>Uterino</span>
										</label>
										<Audio
											style={{ maxWidth: 170, marginLeft: '14px' }}
											src="assets/whiteNoises/Ulterino.mp3"
											controls
											loop
										/>
									</div>
								</div>

								<div className="col-12 col-sm-6 col-md-4 col-lg-3  mb-2 rounded-lg d-flex wrap justify-content-center">
									<div style={{ width: '170', position: 'relative' }}>
										<label htmlFor="w11">
											<input
												type="button"
												name="w-noise"
												id="w11"
												className=" text-center"
											/>
											<img src="https://i.ibb.co/D4T6j81/car-1.png" />
											<span>Carro</span>
										</label>
										<Audio
											style={{ maxWidth: 170, marginLeft: '14px' }}
											src="assets/whiteNoises/Carro.mp3"
											controls
											loop
										/>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-md-4 col-lg-3  mb-2 rounded-lg d-flex wrap justify-content-center">
									<div style={{ width: '170', position: 'relative' }}>
										<label htmlFor="w44">
											<input
												type="button"
												name="w-noise"
												id="w44"
												className=" text-center"
											/>
											<img src="https://i.ibb.co/HX8sVxJ/aquecedor.png" />
											<span style={{ left: '36' }}>Aquecedor</span>
										</label>
										<Audio
											style={{ maxWidth: 170, marginLeft: '14px' }}
											src="assets/whiteNoises/Aquecedor.mp3"
											controls
											loop
										/>
									</div>
								</div>

								<div className="col-12 col-sm-6 col-md-4 col-lg-3  mb-2 rounded-lg d-flex wrap justify-content-center">
									<div style={{ width: '170', position: 'relative' }}>
										<label htmlFor="w55">
											<input
												type="button"
												name="w-noise"
												id="w55"
												className=" text-center"
											/>
											<img src="https://i.ibb.co/dJXRXkT/aspirador-de-po.png" />
											<span style={{ left: '40' }}>Aspirador</span>
										</label>
										<Audio
											style={{ maxWidth: 170, marginLeft: '14px' }}
											src="assets/whiteNoises/Aspirador.mp3"
											controls
											loop
										/>
									</div>
								</div>

								<div className="col-12 col-sm-6 col-md-4 col-lg-3  mb-2 rounded-lg d-flex wrap justify-content-center">
									<div style={{ width: '170', position: 'relative' }}>
										<label htmlFor="w66">
											<input
												type="button"
												name="w-noise"
												id="w66"
												className=" text-center"
											/>
											<img src="https://i.ibb.co/Lr64qSr/secador-de-cabelo.png" />
											<span>Secador</span>
										</label>
										<Audio
											style={{ maxWidth: 170, marginLeft: '14px' }}
											src="assets/whiteNoises/Secador.mp3"
											controls
											loop
										/>
									</div>
								</div>

								<div className="col-12 col-sm-6 col-md-4 col-lg-3  mb-2 rounded-lg d-flex wrap justify-content-center">
									<div style={{ width: '170', position: 'relative' }}>
										<label htmlFor="w77">
											<input
												type="button"
												name="w-noise"
												id="w77"
												className=" text-center"
											/>
											<img src="https://i.ibb.co/bb4f9vJ/ventilador-de-mesa.png" />
											<span style={{ left: '40' }}>Ventilador</span>
										</label>
										<Audio
											style={{ maxWidth: 170, marginLeft: '14px' }}
											src="assets/whiteNoises/Ventilador.mp3"
											controls
											loop
										/>
									</div>
								</div>

								<div className="col-12 col-sm-6 col-md-4 col-lg-3  mb-2 rounded-lg d-flex wrap justify-content-center">
									<div style={{ width: '170', position: 'relative' }}>
										<label htmlFor="w88">
											<input
												type="button"
												name="w-noise"
												id="w88"
												className=" text-center sd"
											/>
											<img src="https://i.ibb.co/BwCfmp4/nebulizer.png" />
											<span style={{ left: '36' }}>Nebulizador</span>
										</label>
										<Audio
											style={{ maxWidth: 170, marginLeft: '14px' }}
											src="assets/whiteNoises/Nebulizador.mp3"
											controls
											loop
										/>
									</div>
								</div>
							</fieldset>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}

export default WhiteNoise
