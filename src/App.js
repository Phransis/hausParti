import { Route,Routes,BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/HomePage';
import About from './components/pages/About';
import Events from './components/pages/Events';
import EventDetails from './components/pages/EventDetails';
import ForgotPassword from './components/pages/ForgotPassword';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';
import Blog from './components/pages/Blog';
import PastEvents from './components/pages/PastEvents';

function App() {
  return (
    <>
    <Header></Header>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='blog' element={<Blog></Blog>}></Route>
        <Route path='events' element={<Events></Events>}></Route>
        <Route path='past-events' element={<PastEvents></PastEvents>}></Route>
        <Route path='event-details/:id' element={<EventDetails></EventDetails>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='forgot-password' element={<ForgotPassword></ForgotPassword>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
      </Routes>
    </Router>
    <Footer></Footer>
    </>
  );
}

export default App;
