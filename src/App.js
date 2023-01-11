import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AddProduct from './pages/AddProduct';
import Products from './pages/Products';
function App() {
    return (
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/addProduct' element={<AddProduct/>}/>
            <Route path='/products' element={<Products/>}/>
          </Routes>
        </Router>
      );
}

export default App