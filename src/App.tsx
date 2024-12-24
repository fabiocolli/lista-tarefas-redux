import "./App.css";
import { NavBar } from "./componentes/NavBar";
import { PaginaPrincipalTarefa } from "./recursos/tarefas/PaginaPrincipalTarefa";

function App() {
  return (
    <>
      <NavBar />
      <PaginaPrincipalTarefa />
    </>
  );
}

export default App;
