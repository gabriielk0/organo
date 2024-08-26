import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="rodape">
      <section>
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src="/images/fb.png" alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src="/images/tw.png" alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src="/images/ig.png" alt="Instagram" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/images/logo.png" alt="Logo" />
      </section>
      <section>
        <p>Desenvolvido por Alura/Gabriel.</p>
      </section>
    </footer>
  );
};

export default Rodape;
