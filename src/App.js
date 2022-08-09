import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import AboutUs from './pages/about-us/about-us.component';
import Contact from './pages/contact/contact.component';
import Graphite from './pages/graphite/graphite.component';
import HomePage from './pages/home-page/home-page.component';
import ProductFacilities from './pages/product-facilities/product-facilities.component';
import Product from './pages/product/product.component';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/about-us'>
          <AboutUs />
        </Route>
        <Route path='/graphite'>
          <Graphite />
        </Route>
        <Route path='/product-services'>
          <Product />
        </Route>
        <Route path='/product-facilities'>
          <ProductFacilities />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
