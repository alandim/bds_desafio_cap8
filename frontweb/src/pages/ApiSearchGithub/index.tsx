
import ResultCard from "components/ResultCard";
import { useState } from "react";
import axios from "axios";
import "./styles.css";

type Github = {
  url: string;
  followers: string;
  name: string;
  location: string;
  avatar_url: string;
};

type FormData = {
  github: string;
};

const GithubSearch = () => {
  const [gitdata, setFormData] = useState<FormData>({
    github: "",
  });

  const [address, setGithub] = useState<Github>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...gitdata, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${gitdata.github}`)
      .then((response) => {
        setGithub(response.data);
      })
      .catch((error) => {
        setGithub(undefined);
        window.alert("Dados Inválidos");
      });
  };
  return (
    <div className="github-search-container">
      <div className="container search-container">
        <h1 className="text-title">Encontre um perfil</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-search-container">
            <input
              type="text"
              name="github"
              value={gitdata.github}
              className="search-input"
              placeholder="Entre com o perfil do Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Buscar
            </button>
          </div>
        </form>
      </div>
        {address && (
          <>
          <div className="container card-github">
          <div className="card-img"> 
              <img src={address.avatar_url} alt={address.name}/>
          </div>
          <div className="card-info">
            <h6 className="text-primary">Informações do perfil</h6>
            <ResultCard title="Perfil: " description={address?.name} />
            <ResultCard title="URL: " description = {address?.url} />
            <ResultCard title="Seguidores: " description={address?.followers} />
            <ResultCard title="Localidade: " description={address?.location} />
          </div>
          </div>
          </>
        )}
    </div>
  );
};

export default GithubSearch;
