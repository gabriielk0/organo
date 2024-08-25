import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";

function App() {
  const [colaborador, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...setColaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
    </div>
  );
}

export default App;
