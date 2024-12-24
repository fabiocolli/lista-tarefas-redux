import { useAppSelector } from "../../app/hooks";
import { selecionarTodasTarefas } from "./tarefasSlice";

export const ListaDeTarefas = () => {
  const tarefas = useAppSelector(selecionarTodasTarefas);

  const listaDeTarefas = tarefas.map((tarefa) => (
    <article key={tarefa.id} className="tarefa-excerpt">
      <h3>{tarefa.titulo}</h3>
      <p>{tarefa.descricao}</p>
      <p className="tarefa-content">
        Criada em: {tarefa.dataCriacao.toLocaleString()}
      </p>
      {tarefa.concluida && (
        <p>Finalizada em: {tarefa.dataFinalizacao?.toLocaleString()}</p>
      )}
    </article>
  ));

  return (
    <section className="posts-list">
      <h2>Tarefas</h2>
      {listaDeTarefas}
    </section>
  );
};
