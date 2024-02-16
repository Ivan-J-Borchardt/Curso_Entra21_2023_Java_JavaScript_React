import { useEffect, useState } from "react"
import { axiosService } from "../services/APIService"

function SelectAutores() {

    const [autores, setAutores] = useState([])

    useEffect(()=>{
        try {
            /*
            const response = await axiosService({
                method: "get",
                url: `autor`,
            })
            */
    
            axiosService({
                method: "get",
                url: `autor`,
            }).then(response => setAutores(response))
    
    
      
          } catch (error) {
            console.log(error);
            alert("Erro ao acessar Backend " + error)
        }
    }, [])
   

    return (
        <select name="nmAutores">
            {autores.map((autor, index) => {
                return <option key={autor.id}>{autor.nome}</option>
            })}
        </select>
    )
}

export default SelectAutores