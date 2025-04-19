import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Homes/Home';
import ContractPage from './Pages/Contracts/ContactPage';
import About from './Pages/About';
import ProductionPage from './Pages/Products/ProductionPage';
import Footer from './components/Footer';
import Kids from './Pages/Products/Kids';
// Routes 
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
         <Route path="/about" element={<About/>} />
         <Route path="/contractPage" element={<ContractPage/>} />
         <Route path="/productionPage" element={<ProductionPage/>} />
         <Route path="/kids" element={<Kids/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
// git init
// git add .
// git commit -m "first commit"
// git branch 
// git remote add origin https://github.com/Raju1-Ahmed/wave.git
// git push 