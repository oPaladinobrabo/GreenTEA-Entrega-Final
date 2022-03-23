import {Link} from 'react-router-dom';
import React from 'react';

const Contatos = () => {
    return ( 

        <div>
            <div className="position-relative">
                <img style={{filter: 'opacity(50%)'}} src="./src/assets/media/puzzles.jpeg" />
            </div>
            <br />
            <div className="container">
                <main className="page contact-us-page">
                    <section className="clean-block clean-form dark bg-white">
                        <div className="block-heading mb-4 p-3">
                            <h2 className="text-info">Fale conosco</h2>
                            <p>
                                Deixe aqui suas duvidas, elogios e sugestões para melhorar nossos serviços.
                            </p>
                        </div>
                        <hr />
                        <div className="container row">
                            <form className=" col-10">
                                <div className="mb-3">
                                    <label className="form-label" for="name">Nome</label>
                                    <input className="form-control" type="text" id="name" name="name"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" for="email">Email</label>
                                    <input className="form-control" type="email" id="email" name="email"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" for="assunto">Assunto</label>
                                    <input className="form-control" type="text" id="assunto" name="assunto"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" for="msg">Mensagem</label>
                                    <textarea className="form-control" rows="6" id="msg" name="msg"></textarea>
                                </div>
                                <div className="mb-3">
                                    <Link className="btn btn-primary" to={"/#"}>Enviar</Link>
                                </div>
                            </form>
                            
                        </div>
                    </section>
                </main>
            </div>
        </div>
     );
}
 
export default Contatos;


