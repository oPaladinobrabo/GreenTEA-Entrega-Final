import React, { useState, useEffect } from "react";
import Api from "../../Services/Api";
import { Link, useNavigate, useParams } from "react-router-dom";

const PictogramaDelete = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const redirect = "/pictogramas"; //pagina de redirecionamento
  const tabela = "/CardTables"; //tabela rota da api
  const tabela2 = "/Categorias"; //tabela estrangeira rota da api 
  const [obj, setObj] = useState({});
  const [obj2, setObj2] = useState({});

  useEffect(() => {
    Api.get(`${tabela}/${id}`)
      .then((response) => {
        setObj(response.data);
        
        Api.get(`${tabela2}/${obj.categoriaID}`)
        .then((response) => {
          setObj2(response.data);
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error);
        });
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
      <br /><br /><br />

      <div className="alert alert-danger">
        <h4 className="alert-heading">Atenção!</h4>
        <h3>Você realmente quer excluir este item?</h3>
        <hr />
        <p className="mb-0">
          Lembrando que sempre que precisar, você também pode editar o Pictograma."#f8f8f8"
        </p>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
          <div
            className="card border-0"
            style={{ minHeight: 350, background: obj2.cor }}
          >
              <img
                className="card-img-top scale-on-hover bg-white card_index_receita_img"
                src={obj.img}
                alt="Card Image"
              />
              <hr />
            <div className=" card_index_receita  bg-white ">
              <h5 className="p-1" style={{ minHeight: 50 }}>
                {obj.nome}
              </h5>
              <hr />
              <h4
                className="text-center card-text  "
                style={{ maxHeight: 100, overflow: "hidden" }}
              >
                {obj2.nome}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button onClick={() => deletar(id)} className="btn btn-danger ml-4">
          Confirmar
        </button>
        <Link to={redirect} className="btn btn-primary ml-4 mr-4">
          Voltar
        </Link>
      </div>
    </div>
  );
};

export default PictogramaDelete;
