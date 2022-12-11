import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Main from "./pages/Main";
import NewsList from "./pages/NewsList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<NewsList />}></Route>
        <Route path="/:category" element={<NewsList />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
