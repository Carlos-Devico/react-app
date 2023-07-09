import React from 'react'
import { View } from 'react-native'
import Todo from './Todo'

// Componente TodoList
const TodoList = ({ todos, deleteTodo, toggleComplete, type }) => {
  const getVisibleTodos = (todos, type) => {
    switch (type) {
      case 'Tudo':
        return todos
      case 'Completo':
        return todos.filter((t) => t.complete)
      case 'Ativo':

        return todos.filter((t) => !t.complete)
    }
  }
  todos = getVisibleTodos(todos, type)
  // Mapeando o array de todos e criando o componente Todo para cada um
  todos = todos.map((todo, i) => {
    return (
      <Todo
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        key={i}
        todo={todo}
      />
    );
  });

  // Retornando o componente View que envolve a lista de todos
  return <View>{todos}</View>;
};

export default TodoList;
