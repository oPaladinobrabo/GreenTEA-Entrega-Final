import React from 'react';
import './Footer.css'


const Footer = () => {
    return ( 
        <footer className="d-flex footer-dark justify-content-center align-content-center p-0">
        <div className="container p-3">
            <div className="footer-copyright">
                <a className=" text-decoration-none" asp-area="" asp-controller="Home" asp-action="Index">
                    <div>
                        <p style={{fontSize: '24' }} className="d-flex justify-content-center mb-0">
                            <span style={{color: "#198754"}}>green</span>
                            <span style={{color: "#DC3545"}}>T</span>
                            <span style={{color: "#FFC107"}}>e</span>
                            <span style={{color: "#1D6EFD"}}>a</span>
                            <span style={{color: "gray"}}>©</span>
                        </p>
                        <p>
                            <span className="d-flex justify-content-center mt-0 text-secondary">Todos os direitos reservados 2022</span>
                        </p>
                    </div>
                </a>
            </div>
            <div className="row ">
                <div className="col-sm-3 col-4">
                    <h5>Serviços</h5>
                    <ul>
                        <li><a asp-controller="CardTables" asp-action="Index">Pictogramas</a></li>
                        <li><a asp-controller="Home" asp-action="Wnoise">White-Noise</a></li>
                        <li><a asp-controller="Home" asp-action="Blog">Blog</a></li>
                    </ul>
                </div>
                <div className="col-sm-3 col-4">
                    <h5>Funções</h5>
                    <ul>
                        <li><a asp-controller="Categorias" asp-action="Index">Categorias</a></li>
                        <li><a asp-controller="Receitas" asp-action="Create">Criar receita</a></li>
                        <li><a asp-controller="Home" asp-action="Index">Próximos Passos</a></li>
                    </ul>
                </div>
                <div className="col-sm-3 col-4">
                    <h5>Suporte</h5>
                    <ul>
                        <li><a asp-controller="Home" asp-action="Faq">FAQ</a></li>
                        <li><a asp-controller="Home" asp-action="Sobre">Sobre</a></li>
                        <li><a asp-controller="Home" asp-action="Contatos">Contatos</a></li>
                    </ul>
                </div>
                <div className="col-sm-3 col-12">
                    <h5>Fontes</h5>
                    <ul className="row">
                        <li className="col-4 col-sm-12"><a target="_blank" href="https://tismoo.us/portal/">Tismoo</a></li>
                        <li className="col-4 col-sm-12"><a target="_blank" href="https://institutoneurosaber.com.br">NeuroSaber</a></li>
                        <li className="col-4 col-sm-12"><a target="_blank" href="https://www.paho.org/pt/topicos/transtorno-do-espectro-autista">Paho</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
     );
}
 
export default Footer;