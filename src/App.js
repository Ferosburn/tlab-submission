import './App.css';
import Services from './js/Services';
import Hero from './js/Hero';
import Navbar from './js/Navbar';
import Clients from './js/Clients';
import Footer from './js/Footer';
import SoundcloudAPI from './js/SoundcloudAPI';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Clients />
      <Footer />
      <SoundcloudAPI />
    </div>
  );
}

export default App;
