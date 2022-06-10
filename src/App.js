import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import CardDetails from "./components/CardDetails";
import Cards from "./components/Cards";
function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Cards />} />
        <Route path='/cart/:id' element={<CardDetails />} />
      </Routes>
    </div>
  );
}

export default App;
