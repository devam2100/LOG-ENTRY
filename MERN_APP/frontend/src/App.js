import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from './components/Read';
import Create from './components/Create';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/all" element={<Read />} />
          <Route path="/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
