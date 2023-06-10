import { Provider, useDispatch, useSelector } from "react-redux";
import "./App.css";
import { store } from "./store";
import { useEffect } from "react";
import { getTodo } from "./store/todo/todoThunk";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

const AppContent = () => {
  const { selectValue } = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch, selectValue]);

  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppContent />
      </Provider>
    </div>
  );
}

export default App;
