import { Fragment } from 'react';
import './App.css';
import Card from './components/card/card';


function App() {
  const productDetails1 = {
    productId : 1,
    productName : 'Nike Shoes',
    Brand : 'Nike',
    productDescription : "These are the shoes from the nike and best for all the purposes.",
    Price : '7$',
    Rating : 4
  }
  const productDetails2={
    productId : 2,
    productName : 'Fasttrack WristWatch',
    Brand : 'Fasttrack',
    productDescription : "This is the watch from the fasttrack.",
    Price : '5$',
    Rating : 3.5
  }
  const productDetails3={
    productId:3,
    productName:'Samsung Galaxy10',
    Brand:'Samsung',
    productDescription:'this is the mobile phone from samsung.',
    Price:'15$',
    Rating:4.5
  }
  const productDetails4={
    productId:4,
    productName:'Sunglasses',
    Brand:'Sunglasses',
    productDescription:'This is a good sunglasses for the summer.',
    Price:'3$',
    Rating:3.5
  }
  const productDetails5={
    productId:5,
    productName:'Macbook air pro',
    Brand:'Apple',
    productDescription:'This is a beautiful laptop from apple.',
    Price:'50$',
    Rating:4.5
  }
  return (
    <Fragment>
      <div className="column">
      <div className="row">
      <Card image='../../shoes.jpg' productDetails={productDetails1}/>
      <Card image='../.././watch.jpg' productDetails={productDetails2}/>
      <Card image='./mobile.jpg' productDetails={productDetails3}/>
      </div>
      <div className="row">
      <Card image='./sunglasses.jpg'  productDetails={productDetails4}/>
      <Card image='./macbook.jpg' productDetails={productDetails5}/>
      </div>
      </div>
    </Fragment>
  )
}

export default App;



