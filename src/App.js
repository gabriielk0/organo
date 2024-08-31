import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";
import Rodape from "./components/Rodape";

function App() {
  const [times, setTimes] = useState([
    {
      nome: "Programação",
      corPrimaria: "#D9F7E9",
      corSecundaria: "#57C278",
    },
    {
      nome: "Front-End",
      corPrimaria: "#E9F9FF",
      corSecundaria: "#82CFFA",
    },
    {
      nome: "Data Science",
      corPrimaria: "#F0F8E2",
      corSecundaria: "#A6D157",
    },
    {
      nome: "Devops",
      corPrimaria: "#FDE7E8",
      corSecundaria: "#E06B69",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#FAE9F5",
      corSecundaria: "#DB6EBF",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FFF5D9",
      corSecundaria: "#FFBA05",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FFEEDF",
      corSecundaria: "#FF8A29",
    },
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  function deletarColaborador() {
    console.log('deletando colaborador')
  }

  function mudarCorDoTime(cor, nome) {
    setTimes(times.map(time => {
      if(time.nome === nome) {
        time.corSecundaria = cor
      }
      return time;
    }));
  }

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />

      {times.map((time, indice) => (
        <Time
          mudarCor={mudarCorDoTime}
          key={indice}
          time={time}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
          aoDeletar={deletarColaborador}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
