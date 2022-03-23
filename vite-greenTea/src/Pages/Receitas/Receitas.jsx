import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Api from "../../Services/Api";

const Receitas = () => {
    const [receitas, setReceitas] = useState([]);
  
    useEffect(() => {
      Api.get(`/Receitas`)
        .then((response) => {
          setReceitas(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);



  return (
    <div className="container mb-5">
      <br />
      <br />
      <br />
      <div className="row "></div>
      <h1 className="col-10">Receitas</h1>
      <p className="col-2">
        <Link to={"/receita/novo"} className="btn btn-info">
          Criar
        </Link>
      </p>
      <section className="portfolio-block projects-cards">
        <div className="container">
          <div className="heading"></div>
          <div className="row">
            {receitas.map((receita) => (
              <div key={receita.id} className="col-sm-6 col-md-4 col-lg-3 mb-3">
                <div
                  className="card border-0"
                  style={{ minHeight: 350, background: "#f8f8f8" }}
                >
                  <Link to={`/receita/${receita.id}`}>
                    <img
                      className="card-img-top scale-on-hover card_index_receita_img"
                      src={receita.urlImg}
                      alt="Card Image"
                    />
                  </Link>
                  <div className=" card_index_receita">
                    <h5 className="p-1" style={{ minHeight: 50 }}>
                      {receita.nomeReceita}
                    </h5>
                    <p
                      className="text-muted card-text  "
                      style={{ maxHeight: 100, overflow: "hidden" }}
                    >
                      {receita.descricao}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Receitas;
