import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selecionarTodasTarefas } from "./tarefasSlice";

export const ListaDeTarefas = () => {
  const tarefas = useAppSelector(selecionarTodasTarefas);
  const tarefasOrdenadas = tarefas
    .slice()
    .sort((a, b) => b.dataCriacao.getTime() - a.dataCriacao.getTime());

  const listaDeTarefas = tarefasOrdenadas.map((tarefa) => (
    <article key={tarefa.id} className="tarefa-excerpt">
      <h3>
        <Link to={`/tarefas/${tarefa.id}`}>{tarefa.titulo}</Link>
      </h3>
      <p>{tarefa.descricao}</p>
      <p className="tarefa-content">
        Criada em: {tarefa.dataCriacao.toLocaleString()}
      </p>
      <span>
        {tarefa.concluida ? (
          <p>✅ Finalizada em: {tarefa.dataFinalizacao?.toLocaleString()}</p>
        ) : (
          <p>⌛</p>
        )}
      </span>
    </article>
  ));

  return (
    <section className="tarefas-list">
      <h2>Tarefas</h2>
      {listaDeTarefas}
    </section>
  );
};
