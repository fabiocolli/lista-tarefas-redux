import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selecionarTarefaPeloId } from "./tarefasSlice";
import { Link } from "react-router-dom";

export const PaginaTarefaSimples = () => {
  const { tarefaId } = useParams();

  const tarefa = useAppSelector((estado) =>
    selecionarTarefaPeloId(estado, tarefaId!)
  );

  if (!tarefa) {
    return (
      <section>
        <h2>Tarefa não encontrada!</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="tarefa">
        <h2>{tarefa.titulo}</h2>
        <p className="tarefa-content">{tarefa.descricao}</p>
        <p className="tarefa-content">{tarefa.dataCriacao.toLocaleString()}</p>
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
        <Link to={`/tarefas/${tarefa.id}/editar`} className="button">
          Editar Tarefa
        </Link>
      </article>
    </section>
  );
};
