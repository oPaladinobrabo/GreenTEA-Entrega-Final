import React, { useState, useEffect } from "react";
import Api from "../../Services/Api";
import { Link, useNavigate, useParams } from "react-router-dom";

const CategoriaDelete = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const redirect = "/categorias"; //pagina de redirecionamento
  const tabela = "/Categorias"; //tabela rota da api
  const [obj, setObj] = useState({});

  useEffect(() => {
    Api.get(`${tabela}/${id}`)
      .then((response) => {
        setObj(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function deletar(id) {
    Api.delete(`${tabela}/${id}`);
    navigate(redirect);
  }

  return (
    <div className="container mb-5">
      <br />
      <br />
      <br />
      <div className="alert alert-danger">
        <h4 className="alert-heading">Atenção! Você realmente quer excluir este item?</h4>
        <h3></h3>
        <hr />
        <h3>TODOS os itens relacionados à ele, serão EXCLUÍDOS!!!</h3>
        <p className="mb-0">
          Lembrando que sempre que precisar, você também pode editar a
          Categoria.
        </p>
      </div>
      <hr />
      <hr />
      <div className="row">
        <div className="col-6">
          <div className="col-sm-8 font-weight-bold">
            Categoria
          </div>
          <div className="col-sm-8 btn font-weight-bold text-white"style={{ background: obj.cor}}>
            {obj.nome}
          </div>
          <div className="col-sm-8 font-weight-bold ">
            Cor
          </div>
          <div className="col-sm-8 btn font-weight-bold text-white"style={{ background: obj.cor}}>  
            {obj.cor}
          </div>
          <hr />
          <div className="d-flex ">
            <div className="col-4">
              <button
                onClick={() => deletar(id)}
                className="btn btn-danger ml-1 mr-3"
              >
                Confirmar
              </button>
            </div>
            <div className="col-4">
              <Link to={redirect} className="btn btn-primary ml-4 mr-4">
              Voltar
            </Link>
            </div>
            
            
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CategoriaDelete;
