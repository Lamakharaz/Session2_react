
import './App.css';
import Product from './Components/Product';
import WelcomeC from './Components/WelcomeC';

import WelcomeF from './Components/WelcomeF';
//render list and props
function App() {
  const person = [
    { name: "lama", gender: "female", age: "23" },

    { name: "Abood", gender: "male", age: "12" },

  ];
  const product = [
    { name: "product1", price: "10", dec: "pretty1" },

    { name: "product2", price: "20", dec: "pretty2" },

  ]


  //rendering list
  const list = person.map(item =>
    <WelcomeF name={item.name} gender={item.gender} age={item.age} />
  );

  const listC = person.map(item =>
    <WelcomeC name={item.name} gender={item.gender} age={item.age} />
  );
  const pro = product.map(item =>
    <Product name={item.name} price={item.price} dec={item.dec} />
  );



  return (
    <div className="App">
      <h1> Welcome Lama kharaz</h1>
    
     {/* <p>{list}</p>*/}
      <p>{list}</p>
    {  /*<p>{pro}</p>*/}

    </div>
  );
}

export default App;
