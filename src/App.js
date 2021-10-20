import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer'
import Services from './Components/Services/Services';
import Section1 from './Components/Section1/Section1';
import Section2 from './Components/Section2/Section2';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import ServiceDetail from './Components/ServiceDetails/ServiceDetail';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Trainer from './Components/Trainer/Trainer';
import Error from './Components/Error/Error'
import Login from './Components/Login/Login';
import AuthProvider from './Components/Context/AuthProvider';
import PrivateRoute from './Components/Privateroute/PrivateRoute';



function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Hero></Hero>
            <Section2></Section2>
            <Section1></Section1>
            <Services></Services>
          </Route>
          <Route path="/home">
            <Hero></Hero>
            <Section2></Section2>
            <Section1></Section1>
            <Services></Services>
          </Route>
          <Route exact path="/service">
           <Services></Services>
          </Route>
          <PrivateRoute path="/blog">
            <Blog></Blog>
          </PrivateRoute>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <PrivateRoute path="/trainer">
            <Trainer></Trainer>
          </PrivateRoute>
          <PrivateRoute path="/service/:id">
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
     
      </AuthProvider>
      
  


      
    </div>
  );
}

export default App;
