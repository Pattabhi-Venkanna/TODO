import { useContext } from "react";
import { TodoContext } from "../store/todoItems-store";

export const Message = () => {
  const { todoItems } = useContext(TodoContext);
  return <center>{todoItems.length === 0 && <i>No Work</i>}</center>;
};
