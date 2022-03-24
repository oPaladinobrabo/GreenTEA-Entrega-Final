import React from "react";
import Home from "../Pages/Home/Home";
import WhiteNoise from "../Pages/Home/WhiteNoise";
import Blog from "../Pages/Home/Blog";
import BlogPicto from "../Pages/Home/BlogPicto";
import BlogWnoise from "../Pages/Home/BlogWnoise";
import BlogDieta from "../Pages/Home/BlogDieta";
import Faq from "../Pages/Home/Faq";
import Sobre from "../Pages/Home/Sobre";
import Contatos from "../Pages/Home/Contatos";
import Pictogramas from "../Pages/Pictogramas/Pictogramas";
import Pictogramas2 from "../Pages/Pictogramas/Pictogramas2";
import PictogramaForm from "../Pages/Pictogramas/PictogramaForm";
import PictogramaDelete from "../Pages/Pictogramas/PictogramaDelete";
import Receitas from "../Pages/Receitas/Receitas";
import Receita from "../Pages/Receitas/Receita";
import ReceitaForm from "../Pages/Receitas/ReceitaForm";
import ReceitaDelete from "../Pages/Receitas/ReceitaDelete";
import Categorias from "../Pages/Categorias/Categorias";
import CategoriaForm from "../Pages/Categorias/CategoriaForm";
import CategoriaDelete from "../Pages/Categorias/CategoriaDelete";
import './Navi.css'
import './gradient.css'


import Logo from "../../assets/media/greenTea2.png"

import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

const Header = () => {
  return (
		<Router>
			<div
				className="container p-0 d-inline-flex justify-content-center row flex-nowrap bg-white"
				style={{ minWidth: '100%' }}
			>
				<div className="container mr-5 col-8 col-sm-10 d-flex justify-content-center pl-5">
					<a className="navbar-brand">
						<img src={Logo} style={{ width: 255 }} className="img-fluid" />
					</a>
				</div>
				<div className="ml-4 col-2 col-sm-1"></div>
			</div>
			<header className="sticky-top" style={{ fontFamily: 'serif' }}>
				<nav
					className="navbar linearGradiente navbar-expand-lg  position-sticky d-lg-flex justify-content-center  justify-content-lg-center align-items-lg-center navigation-clean-search"
					style={{ height: 74 }}
				>
					<div className="container ">
						<button
							className="navbar-toggler bg-light btn-outline-primary"
							type="button"
							data-toggle="collapse"
							data-target=".navbar-collapse"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span
								className="navbar-toggler-icon"
								style={{ width: 35, boxShadow: '0px 0px' }}
							>
								<i className="fas fa-bars"></i>
							</span>
						</button>
						<div
							className="collapse navbar-collapse text-center d-lg-flex justify-content-lg-center align-items-lg-center"
							id="navcol-1"
							style={{
								height: 60,
								fontWeight: 'bold',
								fontSize: 23,
								color: '#fff',
								position: 'relative',
								bottom: -25
							}}
						>
							<ul className="navbar-nav">
								<li className="nav-item" data-bss-hover-animate="pulse">
									<NavLink
										exact="true"
										to="/"
										className="nav-link shadow-lg rounded-pill "
										style={{
											color: '#fff',
											background: '#1cc157',
											fontSize: 18,
											margin: 5
										}}
									>
										HOME
									</NavLink>
								</li>
								<li className="nav-item" data-bss-hover-animate="pulse">
									<NavLink
										to="/pictogramas"
										className="nav-link shadow-lg rounded-pill"
										style={{
											color: '#fff',
											background: '#198754',
											fontSize: '18px',
											margin: '5px'
										}}
									>
										PICTOGRAMA
									</NavLink>
								</li>
								<li className="nav-item" data-bss-hover-animate="pulse">
									<NavLink
										to="/whitenoises"
										className="nav-link shadow-lg rounded-pill text-nowrap"
										style={{
											color: '#fff',
											background: '#0d94f5',
											fontSize: '18px',
											margin: '5px'
										}}
									>
										White Noise
									</NavLink>
								</li>
								<li className="nav-item" data-bss-hover-animate="pulse">
									<NavLink
										to="/receitas"
										className="nav-link shadow-lg rounded-pill"
										style={{
											color: '#fff',
											background: '#FFA012',
											fontSize: '18px',
											margin: '5px'
										}}
									>
										RECEITAS
									</NavLink>
								</li>
								<li className="nav-item" data-bss-hover-animate="pulse">
									<NavLink
										to="/blog"
										className="nav-link shadow-lg rounded-pill"
										style={{
											color: '#fff',
											background: '#FFC107',
											fontSize: '18px',
											margin: '5px'
										}}
									>
										BLOG
									</NavLink>
								</li>
								<li className="nav-item" data-bss-hover-animate="pulse">
									<NavLink
										to="/sobre"
										className="nav-link shadow-lg rounded-pill"
										style={{
											color: '#fff',
											background: '#Df3f4f',
											fontSize: '18px',
											margin: '5px'
										}}
									>
										SOBRE
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
			<Routes>
				<Route path="/" exact="true" element={<Home />} />
				<Route path="/whitenoises" element={<WhiteNoise />} />
				<Route path="/sobre" element={<Sobre />} />
				<Route path="/faq" element={<Faq />} />
				<Route path="/contatos" element={<Contatos />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/blog-dieta" element={<BlogDieta />} />
				<Route path="/blog-white-noise" element={<BlogWnoise />} />
				<Route path="/blog-pictograma" element={<BlogPicto />} />
				<Route path="/pictogramas" element={<Pictogramas />} />
				<Route path="/pictogramas2" element={<Pictogramas2 />} />
				<Route path="/pictograma/editar/:id" element={<PictogramaForm />} />
				<Route path="/pictograma/delete/:id" element={<PictogramaDelete />} />
				<Route path="/pictograma/novo" element={<PictogramaForm />} />
				<Route path="/receitas" element={<Receitas />} />
				<Route path="/receita/:id" element={<Receita />} />
				<Route path="/receita/editar/:id" element={<ReceitaForm />} />
				<Route path="/receita/novo" element={<ReceitaForm />} />
				<Route path="/receita/delete/:id" element={<ReceitaDelete />} />
				<Route path="/categorias" element={<Categorias />} />
				<Route path="/categoria/editar/:id" element={<CategoriaForm />} />
				<Route path="/categoria/novo" element={<CategoriaForm />} />
				<Route path="/categoria/delete/:id" element={<CategoriaDelete />} />
				{}
			</Routes>
		</Router>
	)
};

export default Header;
