import React, { useState, useEffect } from "react";
import Api from "../../Services/Api";
import { Link, useNavigate, useParams } from "react-router-dom";

const PictogramaForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [
    card = {
      nome: "",
      img: "",
      categoriaID: 0,
    },
    setCard,
  ] = useState({});
  const [
    categorias = {
      nome: "",
      cor: 0,
    },
    setCategorias,
  ] = useState([]);

  useEffect(() => {
    if (id) {
      Api.get(`/CardTables/${id}`)
        .then((response) => {
          setCard(response.data);
          Api.get(`/Categorias/`).then((response) => {
            setCategorias(response.data);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      Api.get(`/Categorias`).then((response) => {
        setCategorias(response.data);
      });
    }
  }, []);

  function onChange(ev) {
    const { name, value } = ev.target;
    setCard({ ...card, [name]: value });
  }

  function onSubmit(ev) {
    ev.preventDefault();
    const metodo = id ? "put" : "post";
    const request = id ? `CardTables/${id}` : `CardTables/`;
    Api[metodo](request, card)
      .then((response) => {
        navigate("/pictogramas");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container">
      <br /><br /><br />
      <div className="text-center">
        <h1>{id ? "Editando " : "Criando "}Pictograma</h1>
      </div>
      <h4>...</h4>
      <hr />
      <div className="d-flex p-2 justify-content-center">
        <div className="col-md-6">
          <form onSubmit={onSubmit} className="">
            <div className="form-group">
              <label htmlFor="img" className="control-label">
                Imagem
              </label>
              <input
                type="text"
                name="img"
                id="img"
                placeholder="Url da imagem*"
                className="contact-input fields form-control"
                required=""
                value={card.img || ""} //uncontrolled > controlled
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="nome" className="control-label">
                Nome
              </label>
              <input
                type="text"
                name="nome"
                id="nome"
                placeholder="Nome do pictograma*"
                className="contact-input fields  form-control"
                required=""
                value={card.nome || ""}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="categoriaID" className="control-label">
                Categoria
              </label>
              <select
                name="categoriaID"
                id="categoriaID"
                className="form-control"
                value={card.categoriaID || "Selecione"}
                onChange={onChange}
              >
                {!id && <option value="Selecione">Selecione</option>}
                {categorias.map((categoria) =>
                      <option key={categoria.id} value={categoria.id || ""}>
                        {categoria.nome}
                      </option>        
                )}
              </select>
            </div>

            <div className="form-group">
              {id &&
                <button onClick={() => deleteDestino(destino.id)} className="btn btn-danger ml-4">
                  Delete
                </button>
              }
              
              <Link to={"/pictogramas"} className="btn btn-primary ml-4 mr-4">
                Voltar
              </Link>
              <button type="submit" className="btn btn-style btn-success mr-4">
                {id ? "Salvar" : "Enviar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PictogramaForm;
