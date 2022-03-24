import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Api from '../../Services/Api';

const Pictogramas = () => {

    const navigate = useNavigate();
    const [ cards, setCards] = useState([]);
    const [filtro, setFiltro] = useState('');
  
      useEffect(() => {  
            Api.get(`/CardTables`)
            .then((response) => {
              setCards (response.data);
            })
            .catch((error) => {
                console.log(error);
            })
      }, []);


    let cardsState = cards

    if(filtro){
        const exp = eval(`/${filtro.replace(/[^\d\w]+/,'.*')}/i`)
        cardsState = cards.filter( item => exp.test( item.nome )     
        )
    }
    const filtrarNome = e =>{
        setFiltro( e.target.value)
    }
    let load = ""
    if(cardsState.length < 1 && filtro){
        load = "Nenhum resultado encontrado com estes parâmetros!"
    } else if(cardsState.length < 1) {
        load = "Carregando..."
    }


  return (


    <div className="container justify-content-center align-items-center mb-5">
        <hr />
        <div className="container mb-5">
            <div className="container p-0 m-0">
                <div className="d-flex justify-content-around align-items-center mt-5">
                    <h1>Tabela Pictogramas</h1>
                </div>
                <hr/>
                <div className="additonal p-2 d-flex">  
                    <div className="input-group pl-2 pr-2">
                        <input type="search" onChange={filtrarNome} placeholder="buscar..." className="form-control filtr-controls filtr-search mr-3  border-info" data-search/>
                        <p>
                            <Link to={"/pictograma/novo"} className="btn btn-primary">Criar Novo</Link> | <Link to={"/pictogramas"} className="btn btn-primary">Voltar</Link> |
                            <Link to={"/categorias"} className="btn btn-primary" >Categoria</Link>
                        </p>
                    </div>
                </div>

                <div className="cards d-flex row filter-container ml-sm-2 ml-md-3 ml-4 ">
                    <h4>{load}</h4>
                    {cardsState.map(card => (
                        <div key={card.id} className="card filtr-item col-6 col-sm-4 col-md-2 col-lg-3 card-edit "
                                style={{background: card.categoria.cor, border: '#fff solid 2'}}
                                data-category={card.categoria.nome} data-sort="value">

                            <img src={card.img} alt="sample" />

                            <div className="card-edit-textos">
                                <p>{card.nome}</p>
                                <p>{card.categoria.nome}</p>

                                <div className="card-edit-botoes">
                                    <Link to={`/pictograma/editar/${card.id}`} className="btn btn-warning border-danger m-1"><i className="fas fa-user-edit"></i>-</Link>
                                </div>
                            </div>
                        </div>
                    ))           
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pictogramas