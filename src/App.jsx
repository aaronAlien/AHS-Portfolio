import './index.css';
import MyProjects from "./Pages/MyProjects/MyProjects";
import AboutMe from "./Pages/About/AboutMe";
import Main from "./Pages/Main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  const routes = (
    <Router>
      <Routes>
      <Route path='/' element={<Main />} />        
        <Route path='/about' element={<AboutMe />} />
        <Route path='/projects' element={<MyProjects />} />

      </Routes>
    </Router>
  );
  
  return (
    <>
    <div className="overflow-hidden">{routes}</div>
    </>
  );
}

export default App;
