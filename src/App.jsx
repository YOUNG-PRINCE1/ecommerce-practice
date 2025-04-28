import {BrowserRouter as Router,Routes, Route,} from "react-router-dom"
import Navbar from './components/Navbarfiles/Navbar'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Cart from './components/pages/Cart' 
import Catalogue from "./components/pages/Catalogue"
import Home from './components/pages/Home'
import Footer from "./components/Footer/Footer"
import Search from "./components/pages/Search"
import ProductDetails from "./components/pages/Productdetails/ProdDetails"
import Success from "./components/Success"
import Signup from "./components/Signup"
import Shipping from "./components/Shipping"
import { CartProvider } from "./components/Content/CartContext"



function App() {
  

  return (
    <>
     <CartProvider>
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/catelogue" element={<Catalogue/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path='/product/:id' element={<ProductDetails/>}/>
            <Route path='/success' element={<Success />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/search" element={<Search/>}/>

            
          </Routes>
          <Footer />
        </Router>
     </CartProvider>
    </>
  )
}

export default App
