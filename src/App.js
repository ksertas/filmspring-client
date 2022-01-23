import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/Footer';
import FooterLoggedIn from './components/footer/FooterLoggedIn';
import NavBar from './components/navbar/NavBar';
import NavBarLoggedIn from './components/navbar/NavBarLoggedIn';
import { AuthContext } from './context/AuthContext';
import Error from './pages/error/Error';
import GroupProfile from './pages/group_profile/GroupProfile';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Media from './pages/media/Media';
import Profile from './pages/profile/Profile';
import ProtectedRoutes from './pages/ProtectedRoutes';
import Register from './pages/register/Register';
import Search from './pages/search/Search';
import Settings from './pages/settings/Settings';

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <div className="App">
      <Router>
        {auth ? <NavBarLoggedIn /> : <NavBar />}
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/media" element={<Media />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/group/:id" element={<GroupProfile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {auth ? <FooterLoggedIn /> : <Footer />}
      </Router>
    </div>
  );
}

export default App;
