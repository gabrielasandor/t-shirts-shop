import './App.css';
import Product from './Product.js';
import tshirts from './tshirts.json';
 
function App() {
  
  return (
    <div className="App">
      
      <h1 id="titleShop">Tshirts Shop</h1>
     <div className="cards">
      
      {tshirts.map((tshirt) => <Product imageAttribute={tshirt} titleAttribute={tshirt} manufactAttribute={tshirt} priceAttribute={tshirt} availableColors={tshirt.availableColors} /> )}
      </div>
     
    </div>
  );
}

export default App;
