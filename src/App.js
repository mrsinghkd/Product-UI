import logo from './logo.svg';
import './App.css';
import Footer from './component/Footer';
import TestimonialCard from './component/TestimonialCard';
import HeroBanner from './component/HeroBanner';
import PlantCard from './component/PlantCard';
import Navbar from './component/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroBanner />
      <PlantCard />
      <TestimonialCard />
      <Footer />
      
    </div>
  );
}

export default App;
