import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

export interface Tarefa {
  id: string;
  titulo: string;
  descricao: string;
  dataCriacao: Date;
  concluida: boolean;
  dataFinalizacao?: Date;
}

const initialState: Tarefa[] = [
  {
    id: "1",
    titulo: "Comprar mantimentos",
    descricao: "Ir ao mercado e comprar frutas, vegetais e leite.",
    dataCriacao: new Date("2024-01-01T10:00:00"),
    concluida: false,
  },
  {
    id: "2",
    titulo: "Estudar TypeScript",
    descricao:
      "Revisar os conceitos básicos de TypeScript e práticas de tipagem.",
    dataCriacao: new Date("2024-01-02T14:30:00"),
    concluida: true,
    dataFinalizacao: new Date("2024-01-03T15:00:00"),
  },
  {
    id: "3",
    titulo: "Exercícios físicos",
    descricao: "Fazer uma caminhada de 30 minutos no parque.",
    dataCriacao: new Date("2024-01-03T08:00:00"),
    concluida: false,
  },
  {
    id: "4",
    titulo: "Preparar apresentação",
    descricao:
      "Criar slides para a apresentação de trabalho na próxima reunião.",
    dataCriacao: new Date("2024-01-04T12:00:00"),
    concluida: true,
    dataFinalizacao: new Date("2024-01-05T10:00:00"),
  },
  {
    id: "5",
    titulo: "Ler um livro",
    descricao: "Terminar de ler o capítulo 5 do livro 'Clean Code'.",
    dataCriacao: new Date("2024-01-05T18:00:00"),
    concluida: false,
  },
];

const tarefasSlice = createSlice({
  name: "tarefas",
  initialState,
  reducers: {
    adicionarTarefa: {
      reducer: (state, action: PayloadAction<Tarefa>) => {
        state.push(action.payload);
      },
      prepare: (titulo: string, descricao: string) => ({
        payload: {
          id: nanoid(),
          titulo,
          descricao,
          dataCriacao: new Date(),
          concluida: false,
        },
      }),
    },
    atualizaTarefa(state, action: PayloadAction<Tarefa>) {
      const { id, titulo, descricao, concluida, dataCriacao } = action.payload;

      const tarefa = state.find((tarefa) => tarefa.id === id);

      if (tarefa) {
        tarefa.titulo = titulo;
        tarefa.descricao = descricao;
        tarefa.dataCriacao = dataCriacao;
        tarefa.concluida = concluida;
      }
    },
  },
  selectors: {
    selecionarTodasTarefas: (estadoTarefas) => estadoTarefas,
    selecionarTarefaPeloId: (estadaTarefa, idTarefa) =>
      estadaTarefa.find((tarefa) => tarefa.id === idTarefa),
  },
});

export default tarefasSlice.reducer;
export const { selecionarTodasTarefas, selecionarTarefaPeloId } =
  tarefasSlice.selectors;
export const { adicionarTarefa, atualizaTarefa } = tarefasSlice.actions;
