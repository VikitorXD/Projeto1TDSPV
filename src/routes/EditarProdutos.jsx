import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import "./EditarProduto.scss";

 

export default function EditarProdutos() {

  const { id } = useParams();

  const navigate = useNavigate();

 

  const [produto, setProduto] = useState({

    id: id,

    nome: "",

    desc: "",

    preco: "",

    img: "",

  });

 

  const handleChange = (event) => {

    const { name, value } = event.target;

    setProduto({ ...produto, [name]: value });

  };

 

  const handleSubmit = (e) => {

    e.preventDefault();

 

    fetch(`http://localhost:5000/produtos/${id}`, {

      method: "PUT",

      body: JSON.stringify(produto),

      headers: {

        "Content-Type": "application/json",

      },

    })

      .then((response) => response.json())

      .then(() => {

        navigate("/produtos");

      })

      .catch((error) => console.log(error));

  };

 

  useEffect(() => {

    fetch(`http://localhost:5000/produtos/${id}`, {

      method: "GET",

      headers: {

        "Content-Type": "application/json",

      },

    })

      .then((response) => response.json())

      .then((data) => {

        setProduto(data);

      })

      .catch((error) => console.log(error));

  }, [id]);

 

  return (

    <div className="container">

      <h1>EDITAR PRODUTO</h1>

      <div>

        <form onSubmit={handleSubmit}>

          <fieldset>

            <legend>Produto Selecionado</legend>

            <input type="hidden" name="id" value={produto.id} />

            <div>

              <label htmlFor="idProd">Nome do Produto</label>

              <input

                type="text"

                name="nome"

                id="idProd"

                onChange={handleChange}

                value={produto.nome}

              />

            </div>

            <div>

              <label htmlFor="idDesc">Descrição</label>

              <input

                type="text"

                name="desc"

                id="idDesc"

                onChange={handleChange}

                value={produto.desc}

              />

            </div>

            <div>

              <label htmlFor="idPreco">Preço</label>

              <input

                type="text"

                name="preco"

                id="idPreco"

                onChange={handleChange}

                value={produto.preco}

              />

            </div>

            <div>

              <button type="submit">EDITAR</button>

            </div>

          </fieldset>

        </form>

      </div>

 

      <div>

        <p>Nome : {produto.nome}</p>

        <p>Desc : {produto.desc}</p>

        <p>Preço : {produto.preco}</p>

      </div>

    </div>

  );

}