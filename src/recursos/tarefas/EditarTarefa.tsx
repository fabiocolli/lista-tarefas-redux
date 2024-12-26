import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { atualizaTarefa, selecionarTarefaPeloId } from "./tarefasSlice";
import { useParams, useNavigate } from "react-router-dom";

interface CamposDeEditarTarefa extends HTMLFormControlsCollection {
  titulo: HTMLInputElement;
  descricao: HTMLTextAreaElement;
  dataCriacao: HTMLDataElement;
  concluida: HTMLInputElement;
}

interface ElementosEditarTarefa extends HTMLFormElement {
  readonly elements: CamposDeEditarTarefa;
}

export const EditarTarefa = () => {
  const { idTarefa } = useParams();

  const tarefa = useAppSelector((estado) =>
    selecionarTarefaPeloId(estado, idTarefa!)
  );

  const despacho = useAppDispatch();
  const navegador = useNavigate();

  if (!tarefa) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  const onSalvarTarefaNoClick = (
    event: React.FormEvent<ElementosEditarTarefa>
  ) => {
    const { elements } = event.currentTarget;
    const titulo = elements.titulo.value;
    const descricao = elements.descricao.value;
    const dataCriacao = elements.dataCriacao.value;
    const concluida = elements.concluida.checked;

    if (titulo && descricao && dataCriacao && concluida) {
      despacho(
        atualizaTarefa({
          id: idTarefa!,
          titulo,
          descricao,
          dataCriacao: new Date(dataCriacao),
          concluida,
        })
      );
      navegador("/");
    }
  };

  return (
    <section>
      <h2>Editar Tarefa</h2>
      <form onSubmit={onSalvarTarefaNoClick}>
        <label htmlFor="titulo">Título</label>
        <input type="text" id="titulo" defaultValue={tarefa.titulo} required />
        <label htmlFor="descricao">Descrição da Tarefa</label>
        <textarea
          id="descricao"
          name="descricao"
          defaultValue={tarefa.descricao}
          required
        />
        <label htmlFor="dataCriacao">Data de Criação</label>
        <input
          type="datetime-local"
          id="dataCriacao"
          defaultValue={tarefa.dataCriacao.toISOString().slice(0, 16)}
          required
        />
        <label htmlFor="concluida">Concluída</label>
        <input
          type="checkbox"
          id="concluida"
          defaultChecked={tarefa.concluida}
        />
        <button>Salvar</button>
      </form>
    </section>
  );
};