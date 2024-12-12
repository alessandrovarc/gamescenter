import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Errore 404</h1>
      <p>Pagina non trovata</p>
      <button onClick={() => navigate("/")}>Ritorna al Home Page</button>
    </>
  );
}

export default Error;
