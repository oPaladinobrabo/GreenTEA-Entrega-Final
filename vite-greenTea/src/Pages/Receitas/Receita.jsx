import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Api from "../../Services/Api";

const Receita = () => {
  const { id } = useParams();
  const [receita = {ingredientes: "asdsa"}, setReceita] = useState({});

  useEffect(() => {
    Api.get(`/Receitas/${id}`)
      .then((response) => {
        setReceita(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  /////////////////////////////////////////////////////

    function splita(a, b) {

            let c = a
            console.log(c)
            return c
    }


        //splita(receita.ingredientes, ";")

//////////////////////////////////////////////////////
  return (
    <div className="container mb-5">
      <br />
      <br />
      <br />
      <div>
        <div className="row">
          <h2 className="col-10">Receitas</h2>
          <div className="col-2">
            <Link
              to={"/receitas"}
              className="btn btn-info  align-content-center p-2"
            >
              Voltar
            </Link>
          </div>
        </div>
        <hr />
        <div className="page blog-post-list">
          <section className="clean-block clean-blog-list dark">
            <div className="">
              <div className="block-heading">
                <h1 className="text-info">{receita.nome}</h1>
                <p>{receita.descricaoTopo}</p>
              </div>
              <div className="block-content">
                <div className="clean-blog-post">
                  <div className="row">
                    <div className="col-lg-5">
                      <img className="rounded img-fluid" src={receita.urlImg} />
                      <p>{receita.autor}</p>
                    </div>
                    <div className="col-lg-7">
                      <h3>{receita.nomeReceita}</h3>
                      <p>
                        <i className="fas fa-utensils"></i>
                        <strong>
                          {" "}
                          Rendimento {receita.numPorcoes} porções
                        </strong>
                      </p>
                      <p>
                        <i className="fas fa-clock"></i>
                        <strong> Preparo Médio {receita.tempoPreparo}</strong>
                      </p>
                      <p>
                        <i className="fas fa-fire"></i>
                        <strong> Calorias: {receita.calorias}</strong>
                      </p>
                      <p>
                        <Link
                          to={`/receita/editar/${receita.id}`}
                          className="btn btn-warning"
                        >
                          Editar
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p>{receita.ingredientes}</p>

              <h3>Ingredientes</h3>
              <div>
                {
                  receita.ingredientes.split(';').map((item, index) => (
                    <p key={index}>{item}</p>
                  ))
                
                //receita.ingredientes
               }        
              </div>
              

              <h3>Modo de Preparo:</h3>
              {receita.modoPreparo}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Receita;
