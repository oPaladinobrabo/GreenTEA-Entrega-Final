import React, { useState, useEffect } from "react";
import Api from "../../Services/Api";
import { Link } from "react-router-dom";

const Categorias = () => {

  const tabela = "/Categorias"; //tabela rota da api
  const [obj, setObj] = useState({});

  useEffect(() => {
    Api.get(tabela)
      .then((response) => {
        setObj(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (

    <div className="container">
      <div className="container d-flex justify-content-around align-items-center">
        <h1>Categoria </h1>
        <Link to={"categotia/novo"} className="btn btn-primary">
          Criar novo
        </Link>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Cor</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {obj.map((categoria) => (
            <tr key={categoria.id}>
              <td>{categoria.nome}</td>
              <td>
                <div
                  className="categoria-cores"
                  style="background: @Html.DisplayFor(modelItem => item.Cor);"
                >
                  {categoria.cor}
                </div>
              </td>
              <td>
                <Link
                  to={`/categotia/editar/${categoria.id}`}
                  className="btn btn-warning"
                >
                  <i className="fas fa-user-edit"></i>--Editar--
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Categorias;
