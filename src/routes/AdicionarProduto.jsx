import React from "react";
import { ListaProdutos } from "../components/ListaProdutos";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function AddProd(){

    document.title = "Adicionar Produto";

    const navigate = useNavigate();

    const [id, setId] = useState("")
    const [nome, setNome] = useState("")
    const [desc, setDesc] = useState("")
    const [preco, setPreco] = useState("")

    const handleSubmit = (event)=>{

      const novoProd = {
       id, nome, desc, preco
      }

      setId("")
      setNome("")
      setDesc("")
      setPreco("")

      alert("Produto Adicionado!")

      ListaProdutos.push(novoProd)
      navigate("/produtos")
    }


    return(
        <div>
          <h1>Adicionar Produto</h1>
          <form onSubmit={handleSubmit}>
          <div>
              <label htmlFor="id">Id Do Produto:</label>
              <input
                type="text"
                id="id"
                name="id"
                velue={id}
                onChange={(event)=>setId(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="nome">Nome do Produto:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                velue={nome}
                onChange={(event)=>setNome(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="desc">Descrição:</label>
              <input
                type="text"
                id="desc"
                name="desc"
                velue={desc}
                onChange={(event)=>setDesc(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="preco">Preço:</label>
              <input
                type="text"
                id="preco"
                name="preco"
                velue={preco}
                onChange={(event)=>setPreco(event.target.value)}
              />
              <button type="submit">Adicionar</button>
            </div>
          </form>
        </div>
      );
  }
