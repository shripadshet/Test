import "./App.css";



import Menu from "./Pages/Menu";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
     
        <Routes>
         
          <Route path="/" exact Component={Menu} />
       
        </Routes>
  
      </Router>
    </div>
  );
}

export default App;