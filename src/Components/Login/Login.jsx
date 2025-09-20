import { FaUser, FaLock } from "react-icons/fa";

import { useState } from "react";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o comportamento padrão do formulário, ou seja ele não vai recarregar a página
    // Aqui você pode adicionar a lógica de autenticação
    // Exemplo de uso da variável username:
    console.log("Usuário:", username);
  };

  return (
    <div className="container">
      <form onClick={handleSubmit}>
        <h1>Acessar o sistema</h1>

        <div className="input-field">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>

        <div className="input-field">
          <input
            type="password"
            placeholder="Insira sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembrar-me
          </label>
          <a href="#">Esqueci minha senha</a>
        </div>
        <button type="submit">Entrar</button>
      </form>

      <div className="signup-link">
        <p>
          "Não tem uma conta? <a href="#">Registre-se</a>"
        </p>
      </div>
    </div>
  );
};

export default Login;
