import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
  return (
    <div className="home-container-desafio">
      <h1>Desafio Github API</h1>
      <p>DevSuperior - Escola de programação</p>
      <Link to="/search">
        <button className="btn btn-primary">Começar</button>
      </Link>
    </div>
  );
};

export default Home;
