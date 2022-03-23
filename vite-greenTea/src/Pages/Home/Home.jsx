import React from 'react'
import {Link} from 'react-router-dom';


const Home = () => {
  return (
    <div>
        <section className="projects-horizontal">
        <div className="container">
            <div className="intro">
                <h2 className="text-center" style={{color: '#5AAFCC',fontSize: '48'}}>Acompanhe seu
        filho com TEA</h2>
                <p className="text-center">Um aplicação para ajudar com a comunicação de crianças, adolescentes e adultos.
        Contém ainda ferramentas para auxiliar no dia-a-dia.        
         </p>
            </div>
           <div className="row d-inline-flex projects">
                <div className="col-sm-6 col-12 item">
                    <div className="row">
                        <div className="col-md-12 col-lg-5">
                            <Link to="/#">
                                <img className="img-fluid rounded-lg"
                                src="../../src/assets/media/pexels-sharon-mccutcheon-1148998.jpg" style={{maxHeight:'180'}}/>
                            </Link>
                            
                        </div>
                        <div className="col">
                            <h3 className="name">Green Tea</h3>
                            <p className="description"> Um projeto para trazer inclusão.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-12 item">
                    <div className="row">
                        <div className="col-md-12 col-lg-5">
                            <Link to="/#">
                                <img className="img-fluid rounded-lg"
                                src="../../src/assets/media/pexels-sharon-mccutcheon-1148998.jpg" style={{height: '180', maxHeight: '180'}}/>
                            </Link>
                        </div>
                        <div className="col">
                            <h3 className="name">Acesso Universal</h3>
                            <p className="description">Pensado no bem-estar da criança e da família. </p>
                        </div>
                    </div>
                </div>       
            </div>
        </div>
        </section>
        <section className="highlight-blue" style={{background: '#5AAFCC'}}>
        <div className="container">
            <div className="intro">
                <h2 className="text-center" style={{fontWeight: 'bold',fontSize: '48'}}>Sobre</h2>
                <p className="text-center" style={{fontSize: '20',color: '#fff'}}>Criado pensando nas famílias e crianças que têm TEA e que precisam de um auxílio que a tecnologia tem a oferecer atualmente.</p>
            </div>
            <div className="buttons">
                <Link  to="/blog" className="btn btn-primary" role="button" >Saiba mais</Link>
            </div>
        </div>
        </section>
        <section className="features-boxed">
        <div className="container">
            <div className="intro">
                <h2 className="text-center" style={{color: '#5AAFCC',fontSize: '48'}}>Ferramentas</h2>
            </div>
            <div className="row justify-content-center features">
                <div className="col-sm-6 col-md-5 col-lg-4 item">
                    <div className="box" style={{background: 'rgba(3,203,143,0.5)'}}>
                        <i className="fa fa-assistive-listening-systems icon" style={{color: 'var(--bs-gray)'}}></i>
                        <h3 className="name">White-Noise</h3>
                        <p className="description">
                            Quando a criança está estressada com os barulhos ambientes, o white-noise é uma ótima forma de ajuda-la a camuflar os barulhos externos.</p>
                        <Link to="/blog-white-noise" className="learn-more" >Saiba mais »</Link >
                    </div>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-4 item">
                    <div className="box" style={{background: 'rgba(255,160,18,0.5)'}}>
                        <i className="fa fa-puzzle-piece icon" style={{color: 'var(--bs-gray)'}}></i>
                        <h3 className="name">Pictogramas</h3>
                        <p className="description">
                            Com a ajuda dos pictogramas as crianças podem se sentir mais confortáveis para mudanças de rotina e também com a comunicação com os responsáveis.</p>
                        <Link to="/blog-pictograma" className="learn-more" >Saiba mais »</Link>
                    </div>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-4 item">
                    <div className="box" style={{background: '#bc12ff7f'}}>
                        <i className="fas fa-bread-slice icon" style={{color: 'var(--bs-gray)'}}></i>
                        <h3 className="name">Dieta</h3>
                        <p className="description">
                            O auxílio de uma dieta balanceada focada em controle de glúten e lactose, apresentam melhoras comportamentais em crianças com transtornos e ansiedade.</p>
                        <Link to="/blog-dieta" className="learn-more" >Saiba mais »</Link>
                    </div>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-4 item">
                    <div className="box" style={{background: 'rgba(0,90,255,0.5)'}}>
                        <i className="fa fa-star-half-empty icon" style={{color: 'var(--bs-gray)'}}></i>
                        <h3 className="name">Mais ferramentas no futuro! </h3>
                        <p className="description">
                            Estamos desenvolvendo mais ferramentas para o futuro! Quememos cada vez mais produzir para o público definido para ajudar todos que precisarem. Fique atento.</p>
                        <Link to="/#" className="learn-more" >Saiba mais »</Link>
                    </div>
                </div>        
            </div>
        </div>
        </section>
    </div>
  )
}

export default Home