import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./componentes/NavBar";
import { PaginaPrincipalTarefa } from "./recursos/tarefas/PaginaPrincipalTarefa";
import { PaginaTarefaSimples } from "./recursos/tarefas/PaginaTarefaSimples";
import { EditarTarefa } from "./recursos/tarefas/EditarTarefa";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<PaginaPrincipalTarefa />} />
          <Route path="/tarefas/:tarefaId" element={<PaginaTarefaSimples />} />
          <Route path="/tarefas/:tarefaId/editar" element={<EditarTarefa />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
