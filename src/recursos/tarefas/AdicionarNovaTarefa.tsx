import { useDispatch } from "react-redux";
import { adicionarTarefa } from "./tarefasSlice";

interface CamposDeAdicionarNovaTarefa extends HTMLFormControlsCollection {
  titulo: HTMLInputElement;
  descricao: HTMLTextAreaElement;
}

interface ElementosAdicionarNovaTarefa extends HTMLFormElement {
  readonly elements: CamposDeAdicionarNovaTarefa;
}

export const AdicionarNovaTarefa = () => {
  const dispatch = useDispatch();

  const handleSubmit = (
    event: React.FormEvent<ElementosAdicionarNovaTarefa>
  ) => {
    event.preventDefault();

    const { elements } = event.currentTarget;
    const titulo = elements.titulo.value;
    const descricao = elements.descricao.value;

    dispatch(adicionarTarefa(titulo, descricao));

    event.currentTarget.reset();
  };

  return (
    <section>
      <h2>Adicionar Nova Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="titulo">Título</label>
        <input type="text" id="titulo" defaultValue="" required />
        <label htmlFor="descricao">Descrição da Tarefa</label>
        <textarea id="descricao" name="descricao" defaultValue="" required />
        <button>Salvar</button>
      </form>
    </section>
  );
};
