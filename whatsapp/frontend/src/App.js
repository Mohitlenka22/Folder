import { Route, BrowserRouter, Routes } from "react-router-dom";
import './App.css';
import Form from './Components/Form';
import Base from './Components/Base';
import Login from "./Components/Login";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Base />} />
          <Route exact path='/form' element={<Form />} />
          <Route exact path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
