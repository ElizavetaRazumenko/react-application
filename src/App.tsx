import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main/main";
import ControlledForm from "./pages/controlled-form/controlled-form";
import UncontrolledForm from "./pages/uncontrolled-form/uncontrolled-form";
import Error from "./pages/error/error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/controlled-form" element={<ControlledForm />} />
      <Route path="/uncontrolled-form" element={<UncontrolledForm />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default App;
