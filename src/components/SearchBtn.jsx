import React , {useState} from "react";

function SearchBtn({ setSearch }) {

    const [continente, setContinente] = useState("") 

    const handleContinente = e => {
        setContinente(e.target.value)
    }


    const actualizarBusqueda = e => {
        setSearch(continente);
    }



  return (
      <div>
        <input type="text" name="" id="" onChange={handleContinente}/>
        <button type="submit" onClick={actualizarBusqueda}>Buscar</button>
      </div>

  );
}

export default SearchBtn;
