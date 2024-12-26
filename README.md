# React + TypeScript + Vite

Este template fornece uma configuração mínima para fazer o React funcionar no Vite com HMR e algumas regras do ESLint.

Atualmente, dois plugins oficiais estão disponíveis:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) usa [Babel](https://babeljs.io/) para Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) usa [SWC](https://swc.rs/) para Fast Refresh

## Expansão da configuração do ESLint

Se você está desenvolvendo uma aplicação de produção, recomendamos atualizar a configuração para habilitar regras de lint com reconhecimento de tipos:

- Configure a propriedade `parserOptions` no nível superior assim:

```js
export default tseslint.config({
  languageOptions: {
    // outras opções...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Substitua `tseslint.configs.recommended` por `tseslint.configs.recommendedTypeChecked` ou `tseslint.configs.strictTypeChecked`
- Opcionalmente adicione `...tseslint.configs.stylisticTypeChecked`
- Instale [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) e atualize a configuração:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Defina a versão do react
  settings: { react: { version: '18.3' } },
  plugins: {
    // Adicione o plugin react
    react,
  },
  rules: {
    // outras regras...
    // Habilite suas regras recomendadas
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## Descrição da Lista de Tarefas

A aplicação de lista de tarefas permite aos usuários criar, visualizar, editar e excluir tarefas. A estrutura principal do projeto está na pasta `src/recursos`, que contém os seguintes arquivos e pastas:

- `tarefas/tarefaslice.js`: Define o slice do Redux para gerenciar o estado das tarefas.
- `app/store.js`: Configura a store do Redux com o slice de tarefas.

### Código atualizado baseado em `app/store.js` e `src/recursos/tarefas/tarefaslice.js`

#### `app/store.js`

```js
import { configureStore } from '@reduxjs/toolkit'
import tarefasReducer from '../recursos/tarefas/tarefaslice'

export const store = configureStore({
  reducer: {
    tarefas: tarefasReducer,
  },
})
```

#### `src/recursos/tarefas/tarefaslice.js`

```js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  lista: [],
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    adicionarTarefa: (state, action) => {
      state.lista.push(action.payload)
    },
    removerTarefa: (state, action) => {
      state.lista = state.lista.filter(tarefa => tarefa.id !== action.payload)
    },
    editarTarefa: (state, action) => {
      const index = state.lista.findIndex(tarefa => tarefa.id === action.payload.id)
      if (index !== -1) {
        state.lista[index] = action.payload
      }
    },
  },
})

export const { adicionarTarefa, removerTarefa, editarTarefa } = tarefasSlice.actions

export default tarefasSlice.reducer
```