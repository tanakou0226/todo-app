import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTodo} from "./hooks/useTodo"
import Home from "./components/home"
import Detail from "./components/detail"

function App() {


  const { todoList } = useTodo();

  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />

        <Route path={`/:id`} element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;