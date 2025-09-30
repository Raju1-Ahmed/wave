import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Homes/Home';
import ContractPage from './Pages/Contracts/ContactPage';
import About from './Pages/About';
import ProductionPage from './Pages/Products/ProductionPage';
import Footer from './components/Footer';
import Kids from './Pages/Products/Kids';
<<<<<<< HEAD
import Womenswear from './Pages/Products/Womenswear';
import Men from './Pages/Products/Men';
import Sportswear from './Pages/Products/Sportswear';
import DenimJacket from './Pages/Products/DenimJacket';
import CasualShirt from './Pages/Products/CasualShirt';
import Hoddie from './Pages/Products/Hoddie';
import Nightwear from './Pages/Products/Nightwear';
// Routes 
=======

>>>>>>> cc73c8b (first commit)
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
<<<<<<< HEAD
         <Route path="/Womenswear" element={<Womenswear/>} />
         <Route path="/MenWear" element={<Men/>} />
         <Route path="/Sportswear" element={<Sportswear/>} />
         <Route path="/DenimJacket" element={<DenimJacket/>} />
         <Route path="/CasualShirt" element={<CasualShirt/>} />
         <Route path="/Hoddie" element={<Hoddie/>} />
         <Route path="/Nightwear" element={<Nightwear/>} />
=======
>>>>>>> cc73c8b (first commit)
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
<<<<<<< HEAD
// git init
// git add .
// git commit -m "first commit"
// git branch 
// git remote add origin https://github.com/Raju1-Ahmed/wave.git
// git push 
=======
>>>>>>> cc73c8b (first commit)
