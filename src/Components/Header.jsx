import React from "react";
import WhiteNoise from "../Pages/Home/WhiteNoise";
import Pictogramas from "../Pages/Pictogramas/Pictogramas";
import Sobre from "../Pages/Home/Sobre";
import Blog from "../Pages/Home/Blog";
import Home from "../Pages/Home/Home";
import Contatos from "../Pages/Home/Contatos";
import Faq from "../Pages/Home/Faq";
import BlogDieta from "../Pages/Home/BlogDieta";
import BlogPicto from "../Pages/Home/BlogPicto";
import BlogWnoise from "../Pages/Home/BlogWnoise";
//import Receitas from "../Pages/Receitas/Receitas";
import {
  BrowserRouter as Router,Link,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

const Header = () => {
    return ( 
        <Router>
    <div className="container p-0 d-inline-flex justify-content-center row flex-nowrap bg-white" style={{minWidth: '100%'}}>
        <div className="container mr-5 col-8 col-sm-10 d-flex justify-content-center pl-5">
            <a className="navbar-brand">
                <img src="./src/assets/media/greenTea2.png" style={{width: 255}} className="img-fluid" />
            </a>
        </div>
    </div>
    <header className="sticky-top" style={{fontFamily: 'serif'}}>
        <nav className="navbar navbar-expand-lg  position-sticky d-lg-flex justify-content-center  justify-content-lg-center align-items-lg-center navigation-clean-search" style={{backgroundColor: "linearGradient(97deg, #00E4D0, #4D90E5, #6AbFdC)", height: "74"}}>
            <div className="container">
                <button className="navbar-toggler bg-light btn-outline-primary"  type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={{width: "35",boxShadow: "0px 0px"}}><i className="fas fa-bars"></i></span>
                </button>
                <div className="collapse navbar-collapse text-center d-lg-flex justify-content-lg-center align-items-lg-center" id="navcol-1" style={{height: 60,fontWeight: 'bold',fontSize: 23,color: '#fff',position: 'relative',bottom: -25}}>
                    <ul className="navbar-nav">
                        <li className="nav-item" data-bss-hover-animate="pulse">
                            <NavLink exact="true" to="/" className="nav-link shadow-lg rounded-pill " 
                            style={{color: "#fff",background: "#1cc157", fontSize: "18px", margin: "5px"}} >
                                HOME
                            </NavLink>
                        </li>
                        <li className="nav-item" data-bss-hover-animate="pulse">
                            <NavLink to="/pictogramas" className="nav-link shadow-lg rounded-pill"
                             style={{color: "#fff",background: "#198754",fontSize: "18px",margin: "5px"}}>
                                PICTOGRAMA
                            </NavLink>
                        </li>
                        <li className="nav-item" data-bss-hover-animate="pulse">
                            <NavLink to="/whitenoises" className="nav-link shadow-lg rounded-pill text-nowrap"
                            style={{color: "#fff",background: "#0d94f5",fontSize: "18px",margin: "5px"}} >
                                White Noise
                            </NavLink>
                        </li>
                        <li className="nav-item" data-bss-hover-animate="pulse">
                            <NavLink to="/receitas" className="nav-link shadow-lg rounded-pill"
                            style={{color: "#fff",background: "#FFA012",fontSize: "18px",margin: "5px"}}>
                                RECEITAS
                            </NavLink>
                        </li>
                        <li className="nav-item" data-bss-hover-animate="pulse">
                            <NavLink to="/blog" className="nav-link shadow-lg rounded-pill" 
                            style={{color: "#fff",background: "#FFC107",fontSize: "18px",margin: "5px"}} >
                                BLOG
                            </NavLink>
                        </li>
                        <li className="nav-item" data-bss-hover-animate="pulse">
                            <NavLink to="/sobre" className="nav-link shadow-lg rounded-pill" 
                            style={{color: "#fff",background: "#Df3f4f",fontSize: "18px",margin: "5px"}} >
                                SOBRE
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </header>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whitenoises" element={<WhiteNoise />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/pictogramas" element={<Pictogramas />} />
        <Route path="/contatos" element={<Contatos />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog-dieta" element={<BlogDieta />} />
        <Route path="/blog-pictograma" element={<BlogPicto />} />
        <Route path="/blog-white-noise" element={<BlogWnoise />} />
        
        {
        //Route path="/receitas" element={<Receitas />} />
        }
      </Routes>
    </Router>
        
     );
}
 
export default Header;