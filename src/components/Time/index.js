import Colaborador from "../Colaborador";
import "./Time.css";

const Time = ( time, colaboradores, aoDeletar) => {
  const css = {backgroundImage: 'url(/images/fundo.png)' ,backgroundColor: props.corSecundaria };

  return (
    colaboradores.length > 0 && (
      <section className="time" style={css}>
        <input value={time.corSecundaria} type='color' className='input-cor' />
        <h3 style={{ borderColor: time.corPrimaria }}>{time.nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador, indice) => {
            console.log('renderizando o colaborador');
            return <Colaborador
            key={indice}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
            corDeFundo={time.corPrimaria}
            aoDeletar={(aoDeletar) => {}}
          />
          })}
        </div>
      </section>
    )
  );
};

export default Time;
