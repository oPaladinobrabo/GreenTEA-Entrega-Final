import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Api from "../../Services/Api";

const Pictogramas = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Api.get(`/CardTables`)
      .then((response) => {
        setCards(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let botoes = [];
  cards.forEach((valor) => {
    if (!botoes.includes(valor.categoria.nome))
      botoes.push(valor.categoria.nome);
  });

  let load = "";
  if (!cards) {
    load = "Carregando...";
  }

  return (
    <div className="container justify-content-center align-items-center mb-5">
      <br /><br />
      <div className="container d-flex justify-content-around align-items-center">
        <h1>Tabela Pictogramas</h1>{" "}
        <Link to={"/pictogramas2"} className="btn btn-primary">
          Editar
        </Link>
      </div>
      <hr />

      <div className="filters position-sticky">
        <ul className="btn-group simplefilter d-flex  flex-wrap p-2">
          <li
            className="btn btn-secondary m-1 filtr-controls rounded-pill"
            data-filter="all"
          >
            Todos
          </li>

          {botoes.map((botao) => (
            <li
              key={botao + "botao"}
              className="btn  m-1 filtr-controls rounded-pill text-white btn-primary"
              data-filter={botao}
            >
              {botao}
            </li>
          ))}
        </ul>
      </div>
      <h4>{load}</h4>
      <div className="cards d-flex row filter-container ml-sm-2 ml-md-3 ml-4 ">
        
        {cards.map((card) => (
          <div
            key={card.id}
            className="card filtr-item col-6 col-sm-4 col-md-2 col-lg-3 card-edit"
            style={{ height: 220, background: card.categoria.cor }}
            data-category={card.categoria.nome}
            data-sort="value"
            data-author="H"
          >
            <img src={card.img} alt="sample" />
            <div className="filtr-title card-edit-textos">
              <p>{card.nome}</p>
              <p>{card.categoria.nome}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pictogramas;
