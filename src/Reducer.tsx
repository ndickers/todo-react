export function reducer(state, action) {
  switch (action.type) {
    case "add todo":
      return [
        ...state,
        { id: action.todoId, content: action.content, isDone: false },
      ];
    case "delete":
      return state.filter((todo) => todo.id !== action.id);
    case "check":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
      );
    case "clear completed":
      return state.filter((todo) => todo.isDone === false);
    default:
  }
}
