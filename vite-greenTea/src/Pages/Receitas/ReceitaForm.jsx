import React, { useState, useEffect } from "react";
import Api from "../../Services/Api";
import { Link, useNavigate, useParams } from "react-router-dom";

const ReceitaForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const redirect = "/receitas"  //pagina de destino
  const tabela = '/Receitas'    //tabela rota da api
  const metodo = id ? "put" : "post";
  const request = id ? `${tabela}/${id}` : `${tabela}`;
  const [obj=
    {
        nomeReceita: "",
        urlImg: "",
        descricaoTopo: "",
        descricao: "",
        ingredientes: "",
        modoPreparo: "",
        numPorcoes: 0,
        calorias: 0,
        tempoPreparo: "",
        autor: ""
      }, setObj] = useState({});

      
  useEffect(() => {
    Api.get(`${tabela}/${id}`)
      .then((response) => {
        setObj(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  function onChange(ev) {
    const { name, value } = ev.target;
    setObj({ ...obj, [name]: value });
  }


  function onSubmit(ev) {
    ev.preventDefault();
    Api[metodo](request, obj)
      .then((response) => {
        navigate(redirect);
      })
      .catch((error) => {
        console.log(error);
      });
  }


  //function deletar(id){
    //Api.delete(`${tabela}/${id}`)
    //navigate(redirect)
  //}

  return (
    <div className="container">
      <br /><br /><br />
      <div className="text-center">
        <h1>{id ? "Editando " : "Criando "}Receita</h1>
      </div>
      <h4>...</h4>
      <hr />
      <div className="d-flex p-2 justify-content-center">
        <div className="col-md-8">
          <form onSubmit={onSubmit} className="">

            <div className="form-group">
              <label htmlFor="nomeReceita" className="control-label">
                Nome
              </label>
              <input
                type="text"
                name="nomeReceita"
                id="nomeReceita"
                placeholder="Nome da receita*"
                className="contact-input fields  form-control"
                required=""
                value={obj.nomeReceita || ""}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="urlImg" className="control-label">
                Imagem
              </label>
              <input
                type="text"
                name="urlImg"
                id="urlImg"
                placeholder="Url da imagem*"
                className="contact-input fields form-control"
                required=""
                value={obj.urlImg || ""} //uncontrolled > controlled
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="descricaoTopo" className="control-label">
                Descrição do topo
              </label>
              <textarea
                htmlFor="descricaoTopo"
                rows="3"
                type="text"
                name="descricaoTopo"
                id="descricaoTopo"
                placeholder="Descrição curta para o topo*"
                className="fields  form-control"
                required=""
                value={obj.descricaoTopo || ""}
                onChange={onChange}>
              </textarea>
            </div>

            <div className="form-group">
              <label htmlFor="descricao" className="control-label">
                Descrição
              </label>
              <textarea
                htmlFor="descricao"
                rows="10"
                name="descricao"
                id="descricao"
                placeholder="Descrição curta para o topo*"
                className="fields  form-control"
                required=""
                value={obj.descricao || ""}
                onChange={onChange}>
              </textarea>
            </div>

            <div className="form-group">
              <label htmlFor="ingredientes" className="control-label">
                Ingredientes
              </label>
              <textarea
                htmlFor="ingredientes"
                rows="16"
                name="ingredientes"
                id="ingredientes"
                placeholder="Descrição curta para o topo*"
                className="fields  form-control"
                required=""
                value={obj.ingredientes || ""}
                onChange={onChange}>
              </textarea>
            </div>

            <div className="form-group">
              <label htmlFor="modoPreparo" className="control-label">
                Modo de Preparo
              </label>
              <textarea
                htmlFor="modoPreparo"
                rows="20"
                name="modoPreparo"
                id="modoPreparo"
                placeholder="Descrição curta para o topo*"
                className="fields  form-control"
                required=""
                value={obj.modoPreparo || ""}
                onChange={onChange}>
              </textarea>
            </div>

            <div className="form-group">
              <label htmlFor="numPorcoes" className="control-label">
                Número de Porções
              </label>
              <input
                type="number"
                name="numPorcoes"
                id="numPorcoes"
                placeholder="Número de porções*"
                className="contact-input fields  form-control"
                required=""
                value={obj.numPorcoes || ""}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="calorias" className="control-label">
                Calorias
              </label>
              <input
                type="number"
                name="calorias"
                id="calorias"
                placeholder="Calorias totais*"
                className="contact-input fields  form-control"
                required=""
                value={obj.calorias || ""}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="tempoPreparo" className="control-label">
                Tempo de Preparo
              </label>
              <input
                type="text"
                name="tempoPreparo"
                id="tempoPreparo"
                placeholder="Tempo de preparo(ex: 45min - 1h20)*"
                className="contact-input fields  form-control"
                required=""
                value={obj.tempoPreparo || ""}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="autor" className="control-label">
                Autoria
              </label>
              <input
                type="text"
                name="autor"
                id="autor"
                placeholder="Link ou referência*"
                className="contact-input fields  form-control"
                required=""
                value={obj.autor || ""}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
                
              <Link to={`/receita/delete/${id}`} className="btn btn-danger ml-4">
                Delete
              </Link>
              <Link to={redirect} className="btn btn-primary ml-4 mr-4">
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

export default ReceitaForm;
