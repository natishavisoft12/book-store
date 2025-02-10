import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Profile from './Components/Profile';
import { Route, Routes } from 'react-router-dom';
import Books from './pages/Books';
import TopRatedBooks from './pages/TopRatedBooks';
import Login from './pages/Login';
import ProtectedRoute from './Components/ProtectedRoute';
import ContactForm from './message/ContectForm';
import BookDetails from './pages/BookDetails';

function App() {
  return (
    <div className="App ">
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/books' element={<Books />} />
          <Route path='/contect' element={<ContactForm/>} />
          <Route path="/book/:bookId" element={<BookDetails />} />
          <Route path='/top' element={<TopRatedBooks />} />
        </Route>

        <Route path='/login' element={<Login />} />

      </Routes>

      {/* <Profile/> */}
    </div>
  );
}

export default App;
