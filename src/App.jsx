import { AddInput } from "./components/AddInput";
import { AppName } from "./components/AppName";
import { Message } from "./components/Message";
import { TodoItems } from "./components/TodoItems";
import { TodoContextProvider } from "./store/todoItems-store";
import "./App.css";
const App = () => {
  return (
    <>
      <TodoContextProvider>
        <AppName />
        <AddInput />
        <Message />
        <TodoItems />
      </TodoContextProvider>
    </>
  );
};
export default App;
