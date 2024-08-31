import Colaborador from "../Colaborador";
import "./Time.css";
import hexToRgba from "hex-to-rgba";

const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {
  const css = {
    backgroundImage: "url(/images/fundo.png)",
    backgroundColor: hexToRgba(time.cor, "0.6"),
  };
  return (
    colaboradores.length > 0 && (
      <section className="time" style={css}>
        <input
          onChange={(evento) => mudarCor(evento.target.value, time.id)}
          value={time.cor}
          type="color"
          className="input-cor"
        />
        <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador, indice) => {
            console.log("renderizando o colaborador");
            return (
              <Colaborador
                key={indice}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                corDeFundo={time.cor}
                aoDeletar={aoDeletar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
