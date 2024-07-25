import { createContext, useReducer } from "react";

export const TodoContext = createContext({
  todoItems: [
    { todoName: "qwertfds", todoDate: "11/22/33" },
    { todoName: "abc", todoDate: "11/22/33" },
  ],
  AddItem: () => {},
  DelItem: () => {},
});

const todoReducer = (nowValue, action) => {
  let NewItem = nowValue;
  if (action.type === "NEW_Item") {
    NewItem = [
      ...nowValue,
      { todoName: action.payload.name, todoDate: action.payload.date },
    ];
  } else if ((action.type = "DELETE_ITEM")) {
    NewItem = nowValue.filter((item) => item.todoName != action.payload.name);
  }
  return NewItem;
};

export const TodoContextProvider = ({ children }) => {
  const [todoItems, dispatcTodoItems] = useReducer(todoReducer, []);
  const AddItem = (name, date) => {
    const addItem = {
      type: "NEW_Item",
      payload: { name, date },
    };
    dispatcTodoItems(addItem);
  };

  const DelItem = (name) => {
    const delItem = {
      type: "DELETE_ITEM",
      payload: { name },
    };
    dispatcTodoItems(delItem);
  };

  return (
    <TodoContext.Provider value={{ todoItems, AddItem, DelItem }}>
      {children}
    </TodoContext.Provider>
  );
};
