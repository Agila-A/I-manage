import './App.css';
import LandingPage from './components/landingPage';
import Navbar from './components/Navbar';
import Products from './components/Products';
import InsertProduct from './components/InsertProduct'
import UpdateProduct from './components/UpdateProduct';
import About from './components/About';
import Login from './components/Login';
import SignUp from './components/signup'; 

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation // Import useLocation hook
} from 'react-router-dom';


// Create a new component to handle conditional rendering
const AppContent = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/'; // Check if the current path is not the root ('/')

  return (
    <>
      {showNavbar && <Navbar title="IMS" about="About" />} {/* Conditionally render the Navbar */}
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/insertproduct" element={<InsertProduct />} />
          <Route path="/updateproduct/:id" element={<UpdateProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent /> {/* Render the new component */}
    </Router>
  );
}

export default App;