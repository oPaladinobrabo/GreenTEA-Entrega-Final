import React from 'react';

let Aquecedor = "./src/assets/whiteNoises/Aquecedor.mp3";
    let Aspirador = "./src/assets/whiteNoises/Aspirador.mp3";
    let Carro = "./src/assets/whiteNoises/Carro.mp3";
    let Cascata = "./src/assets/whiteNoises/Cascata.mp3";
    let Chuva = "./src/assets/whiteNoises/Chuva.mp3";
    let Chuveiro = "./src/assets/whiteNoises/Chuveiro.mp3";
    let Mar = "./src/assets/whiteNoises/Mar.mp3";
    let Nebulizador = "./src/assets/whiteNoises/Nebulizador.mp3";
    let Secador = "./src/assets/whiteNoises/Secador.mp3";
    let Ulterino = "./src/assets/whiteNoises/Ulterino.mp3";
    let Ventilador = "./src/assets/whiteNoises/Ventilador.mp3";

 

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
                            <p>Escolha um tipo de som para ser ouvido como barulho de fundo.</p>
                        </div>
                        <div className="" style={{alignItems: 'center', justifyContent: 'center'}}>

                            <fieldset className="radio-image row d-flex">
{
    
}
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3  mb-2 rounded-lg d-flex wrap justify-content-center">
                                    <div style={{width: '170', position: 'relative'}}>
                                        <label htmlFor="w7">
                                            <input type="radio"  name="w-noise" id="w7" className=" text-center " onClick={player('.track7')}/>
                                            <img src="./src/assets/icons/mute.png"/>
                                            <span>Desliga</span>
                                            <audio preload="metadata" className="track7" src=""></audio>
                                        </label>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4 col-lg-3  mb-2 rounded-lg d-flex wrap justify-content-center">
                                    <div style={{width: '170', position: 'relative'}}>
                                        <label htmlFor="w3">
                                            <input type="radio" name="w-noise" id="w3" className=" text-center" onClick={player('.track3')}/>
                                            <img src="./src/assets/icons/rain (1).png"/>
                                            <span>Chuva</span>
                                            <audio loop preload="metadata" className="track3" src={Chuva}></audio>
                                        </label>   
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4 col-lg-3  mb-2 rounded-lg d-flex wrap justify-content-center">
                                    <div style={{width: '170', position: 'relative'}}>
                                        <label htmlFor="w4">
                                            <input type="radio" name="w-noise" id="w4" className=" text-center" onClick={player('.track4')}/>
                                            <img src="./src/assets/icons/cascata.png"/>
                                            <span>Cascata</span>
                                            <audio loop preload="metadata" className="track4" src={Cascata}></audio>
                                        </label>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4 col-lg-3  mb-2 rounded-lg d-flex wrap justify-content-center">
                                    <div style={{width: '170', position: 'relative'}}>
                                        <label htmlFor="w5">
                                            <input type="radio" name="w-noise" id="w5" className=" text-center" onClick={player('.track5')}/>
                                            <img src="./src/assets/icons/onda.png"/>
                                            <span>Ondas</span>
                                            <audio loop preload="metadata" className="track5" src={Mar}></audio>
                                        </label>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4 col-lg-3  mb-2 rounded-lg d-flex wrap justify-content-center">
                                    <div style={{width: 170, position: 'relative'}}>
                                        <label htmlFor="w6">
                                            <input type="radio" name="w-noise" id="w6" className=" text-center" onClick={player('.track6')}/>
                                            <img src="./src/assets/icons/chuveiro.png"/>
                                            <span style="left: 40px;">Chuveiro</span>
                                            <audio loop preload="metadata" className="track6" src={Chuveiro}></audio>
                                        </label>
                                    </div>
                                </div>




                                <div className="col-12 col-sm-6 col-md-4 col-lg-3  mb-2 rounded-lg d-flex wrap justify-content-center">
                                    <div style={{width: 170, position: 'relative'}}>
                                        <label htmlFor="w9">
                                            <input type="radio" name="w-noise" id="w9" className=" text-center" onClick={player('.track9')}/>
                                            <img src="./src/assets/icons/gravida.png"/>
                                            <span>Uterino</span>
                                            <audio loop preload="metadata" className="track9" src={Ulterino}></audio>
                                        </label>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4 col-lg-3  mb-2 rounded-lg d-flex wrap justify-content-center">
                                    <div style={{width: 170, position: 'relative'}}>
                                        <label htmlFor="w11">
                                            <input type="radio" name="w-noise" id="w11" className=" text-center" onClick={player('.track11')}/>
                                            <img src="./src/assets/icons/car (1).png"/>
                                            <span>Carro</span>
                                            <audio loop preload="metadata" className="track11" src={Carro}></audio>
                                        </label>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4 col-lg-3  mb-2 rounded-lg d-flex wrap justify-content-center">
                                    <div style={{width: 170, position: 'relative'}}>
                                        <label htmlFor="w44">
                                            <input type="radio" name="w-noise" id="w44" className=" text-center" onClick={player('.track44')}/>
                                            <img src="./src/assets/icons/aquecedor.png"/>
                                            <span style={{left: 36}}>Aquecedor</span>
                                            <audio loop preload="metadata" className="track44" src={Aquecedor}></audio>
                                        </label>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4 col-lg-3  mb-2 rounded-lg d-flex wrap justify-content-center">
                                    <div style={{width: 170, position: 'relative'}}>
                                        <label htmlFor="w55">
                                            <input type="radio" name="w-noise" id="w55" className=" text-center" onClick={player('.track55')}/>
                                            <img src="./src/assets/icons/aspirador-de-po.png"/>
                                            <span style={{left: 40}}>Aspirador</span>
                                            <audio loop preload="metadata" className="track55" src={Aspirador}></audio>
                                        </label>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4 col-lg-3  mb-2 rounded-lg d-flex wrap justify-content-center">
                                    <div style={{width: 170, position: 'relative'}}>
                                        <label htmlFor="w66">
                                            <input type="radio" name="w-noise" id="w66" className=" text-center" onClick={player('.track66')}/>
                                            <img src="./src/assets/icons/secador-de-cabelo.png"/>
                                            <span>Secador</span>
                                            <audio loop preload="metadata" className="track66" src={Secador}></audio>
                                        </label>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4 col-lg-3  mb-2 rounded-lg d-flex wrap justify-content-center">
                                    <div style={{width: 170, position: 'relative'}}>
                                        <label htmlFor="w77">
                                            <input type="radio" name="w-noise" id="w77" className=" text-center" onClick={player('.track77')}/>
                                            <img src="./src/assets/icons/ventilador-de-mesa.png"/>
                                            <span style={{left: 40}}>Ventilador</span>
                                            <audio loop preload="metadata" className="track77" src={Ventilador}></audio>
                                        </label>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4 col-lg-3  mb-2 rounded-lg d-flex wrap justify-content-center">
                                    <div style={{width: 170, position: 'relative'}}>
                                        <label htmlFor="w88">
                                            <input type="radio" name="w-noise" id="w88" className=" text-center sd" onClick={player('.track88')}/>
                                            <img src="./src/assets/icons/nebulizer.png"/>
                                            <span style={{left: 36}}>Nebulizador</span>
                                            <audio loop preload="metadata" className="track88" src={Nebulizador}></audio>
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </section>
            </div>    
        </div>
     );
}
 
export default WhiteNoise;
