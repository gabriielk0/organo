import Colaborador from "../Colaborador";
import "./Time.css";

const Time = ({time, colaboradores, aoDeletar, mudarCor}) => {
  const css = {backgroundImage: 'url(/images/fundo.png)' ,backgroundColor: time.corPrimaria };
  return (
    colaboradores.length > 0 && (
      <section className="time" style={css}>
        <input onChange={evento => mudarCor(evento.target.value, time.nome)} value={time.corSecundaria} type='color' className='input-cor' />        
        <h3 style={{ borderColor: time.corSecundaria }}>{time.nome}</h3>
        <div className='colaboradores'>
          {colaboradores.map((colaborador, indice) => {
            console.log('renderizando o colaborador');
            return <Colaborador
            key={indice}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
            corDeFundo={time.corSecundaria}
            aoDeletar={aoDeletar}
          />
          })}
        </div>
      </section>
    )
  );
};

export default Time;
