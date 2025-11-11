import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Reports from "./pages/Reports/Reports";
import Navbar from "./components/navbar/Navbar";

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/"  element={ <Home /> } />
        <Route path="/reports" element={ <Reports />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
