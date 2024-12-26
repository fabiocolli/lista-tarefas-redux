import { AdicionarNovaTarefa } from "./AdicionarNovaTarefa";
import { ListaDeTarefas } from "./ListaDeTarefas";

export function PaginaPrincipalTarefa() {
  return (
    <>
      <AdicionarNovaTarefa />
      <ListaDeTarefas />
    </>
  );
}
