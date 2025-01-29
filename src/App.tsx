import { Route, Routes } from "react-router-dom";
import Basic from "./layouts/Basic";
import Company from "./pages/Company";
function App() {
  return (
    <Routes>
      <Route element={<Basic />}>
      <Route path="/" element={<Company />} />
      </Route>
    </Routes>
  );
}

export default App;
