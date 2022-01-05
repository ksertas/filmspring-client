import './App.scss';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import Home from './pages/Home';
import Media from './pages/Media';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Home /> */}
      <Media />
      <Footer />
    </div>
  );
}

export default App;
