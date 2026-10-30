
import { useState, useCallback } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SignatureDish from './components/SignatureDish';
import Chef from './components/Chef';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && (
        <Preloader onComplete={handleLoadingComplete} />
      )}

      <Navbar />

      <main>
        <Hero />
        <About />
        <SignatureDish />
        <Chef />
        <Gallery />
        <Testimonials />
        <Reservation />
      </main>

      <Footer />
    </>
  );
}

export default App;
