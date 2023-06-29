import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Bio from "./pages/Bio";
import Projects from "./pages/Projects"
import Skills from './pages/Skills';
import Interests from './pages/Interests';
import NoPage from "./pages/NoPage";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='bio' element={<Bio />} />
        <Route path='projects' element={<Projects />} />
        <Route path='skills' element={<Skills />} />
        <Route path='interests' element={<Interests />} />
        <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;