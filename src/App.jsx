import { Routes, Route } from 'react-router-dom';
import './App.css';
import Allrest from './Components/Allrest/Allrest';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Viewdocs from './Components/Viewdocs/Viewdocs';







function App() {
  return (
    <div className="App">

     <Header/>

     <Routes>
      <Route path='/' element={<Allrest/>}/>
      <Route path='/view/:id' element={<Viewdocs/>}/>
     </Routes>

     <Footer/>
    </div>
  );
}

export default App;
