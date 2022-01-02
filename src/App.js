import './App.scss';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
