import logo from './logo.svg';
import './App.css';
import { useState } from "react"

import { axiosService } from './services/APIService';
import SelectAutores from './components/SelectAutores';


function App() {

  const [id, setId] = useState()
  const [nome, setNome] = useState()
  const [ano, setAno] = useState()
  const [cont, setCont] = useState()
  const [autores, setAutores] = useState([])







  async function buscar() {
    try {
      const response = await axiosService({
          method: "get",
          url: `autor/${id}`,
      })
      setNome(response[0].nome)
      setAno(response[0].ano)
      setCont(response[0].contribuicao)
      
    } catch (error) {
      console.log(error);
      alert("Erro ao acessar Backend " + error)
    }
  }

  async function buscarTodos() {
    try {
      const response = await axiosService({
          method: "get",
          url: `autor`,
      })

      console.log(response);
      setAutores(response)

    } catch (error) {
      console.log(error);
      alert("Erro ao acessar Backend " + error)
    }
  }

  async function salvar() {
    try {

      let data = {
        nome: nome, 
        ano: ano,
        contribuicao: cont
      } 

      let head = {
        headers:{
          'Content-Type': 'application/json'
        }
      }


      const response = await axiosService({
          method: "post",
          url: `autor`,
          data,
          head
      })
      setId(response[0].id)
      setNome(response[0].nome)
      setAno(response[0].ano)
      setCont(response[0].contribuicao)
      
    } catch (error) {
      console.log(error);
      alert("Erro ao acessar Backend " + error)
    }
  }

  async function deletar() {
    try {
      const response = await axiosService({
          method: "delete",
          url: `autor/${id}`,
      })
      limparTela()
      
    } catch (error) {
      console.log(error);
      alert("Erro ao acessar Backend " + error)
    }
  }

  function limparTela() {
    setId("")
    setNome("")
    setAno("")
    setCont("")
  }


  return (
    <div className="row">
      <div className="col"></div>
      <form className="col">
        <h2>Cadastro de Autores</h2>
        <div className="mb-3">
          <label htmlFor="idAutor"
            className="form-label">Id</label>

          <input type="number"
            className="form-control"
            id="idAutor"
            placeholder="Id Autor"
            value={id}
            onChange={(event) => { setId(event.target.value) }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="idNome"
            className="form-label">Nome</label>

          <input type="text"
            className="form-control"
            id="idNome"
            placeholder="Nome Autor"
            value={nome}
            onChange={event => setNome(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="idAno"
            className="form-label">Ano</label>

          <input type="text"
            className="form-control"
            id="idAno"
            placeholder="Ano"
            value={ano}
            onChange={event => setAno(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="idCont"
            className="form-label">Contribuição</label>

          <input type="text"
            className="form-control"
            id="idCont"
            placeholder="Contribuição"
            value={cont}
            onChange={event => setCont(event.target.value)}
          />
        </div>


        <div className="mb-3">
               <SelectAutores/>
        </div>

        <button type="button" className="btn btn-primary m-1" onClick={buscar} >Buscar</button>
        <button type="button" className="btn btn-primary m-1" onClick={buscarTodos} >Buscar Todos</button>
        <button type="button" className="btn btn-warning m-1" onClick={salvar}>Salvar</button>
        <button type="button" className="btn btn-danger m-1" onClick={deletar} >Deletar</button>
        <button type="reset" className="btn btn-outline-danger m-1" onClick={limparTela}>Limpar</button>
      </form>

      {autores.map((autor, index)=>{
        return <p key={autor.id}>{autor.nome}</p>
      })} 


      <div className="col"></div>
    </div>
  );
}

export default App;
