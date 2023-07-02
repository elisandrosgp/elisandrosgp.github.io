import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="eli-content">
        <div></div>
      </div>
      {/*main title */}
      <h1 className="banner-title">
        <br />
        Bem vindo ao meu
        <br />
        <span>espaço Dev.</span>
      </h1>
      {/* container */}
      <div className="container-fluid">
        <div className="row">{/* colunas */}</div>
        <p>aqui vou colocar uma galeria com os projetos</p>
      </div>
      {/* container-end */}
      <p className="read-tools">
        aqui vou colocar um carrossel com as linguagems
      </p>
      <footer className="footer">
        {/* copyright */}
        <div>
          <span>footer</span>
        </div>
      </footer>
    </>
  );
}

export default App;
