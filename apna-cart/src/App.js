import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navabar';
import ProductList from './components/ProducyList';
function App() {
  const product = [
    {
      price: 99999,
      name: "Iphone 10S max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi Note 10S max",
      quantity: 0,
    }
  ]
  return (
    <>
    <Navbar/>
    <ProductList product={product}/>
    </>
  );
}

export default App;
