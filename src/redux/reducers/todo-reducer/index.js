import ACTIONS from '../../actions';

const todoState = {
  selected: null,
  todos: [],
};

const todoReducer = (state = todoState, action) => {
  switch (action.type) {
    case ACTIONS.CREATE:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case ACTIONS.UPDATE:
       
      return {
        ...state,
        todos: [...state.todos.filter((item)=>item.id!==action.payload.id), action.payload],
      };;
    case ACTIONS.DELETE:
      const currentItem = state.todos.find(
        (item) => item.id === action.payload.id
      );
      const filteredItems = state.todos.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        todos: [
          ...filteredItems,
          {
            id: currentItem.id,
            content: currentItem.content,
            status: 'deleted',
          },
        ],
      };
    case ACTIONS.REMOVE:
      return {
        ...state,
        todos: [...state.todos.filter((item) => item.id !== action.payload.id)],
      };
    case ACTIONS.SELECT:
      return {
        ...state,
        selected: action.payload,
      };
    case ACTIONS.REMOVE_SELECTED:
      return {
        ...state,
        selected: null,
      };
    default:
      return todoState;
  }
};

export default todoReducer;
