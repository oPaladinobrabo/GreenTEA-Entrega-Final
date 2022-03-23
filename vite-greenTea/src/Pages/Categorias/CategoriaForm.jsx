import React from "react";

const CategoriaForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const redirect = "/categorias"; //pagina de destino
  const tabela = "/Categorias"; //tabela rota da api
  const metodo = id ? "put" : "post";
  const request = id ? `${tabela}/${id}` : `${tabela}`;
  const [obj = { nome: "", cor: "" }, setObj] = useState({});

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

  return (
    <div className="container">
      <h1>Cria nova categoria</h1>

      <hr />
      <div className="d-flex p-2 justify-content-center mt-5 mb-5 pb-5">
        <div className="col-md-4">
          <form>
            <div className="form-group">
              <label htmlFor="nome" className="control-label">
                Nome Categoria
              </label>
              <input
                type="text"
                name="nome"
                id="nome"
                placeholder="Nome da Categoria*"
                className="contact-input fields  form-control"
                required=""
                value={obj.nome || ""}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="cor" className="control-label">
                Categoria
              </label>
              <select
                name="cor"
                id="cor"
                className="form-control"
                value={obj.cor || "Selecione"}
                onChange={onChange}
              >
                {!id && <option value="Selecione">Selecione</option>}
                <option value="#0E9AFF">Azul Claro</option>
                <option value="#005AFF">Azul</option>
                <option value="#03CB8F">Verde Claro</option>
                <option value="#00A11F">Verde</option>
                <option value="#EAE000">Amarelo</option>
                <option value="#FFA012">Laranja</option>
                <option value="#DF0000">Vermelho</option>
                <option value="#bf5317">Marrom</option>
                <option value="#8940c2">Roxo</option>
                <option value="#e589e7">Rosa</option>
              </select>
            </div>

            <div className="form-group">
              {id && (
                <Link
                  to={`/categoria/delete/${id}`}
                  className="btn btn-danger ml-4"
                >
                  Delete
                </Link>
              )}

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

export default CategoriaForm;
