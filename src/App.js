
import Navbar from './components/Navbar';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Footer from './components/Footer';

function App() {
  return (<div className="bg-[#010922] text-white">
    <div className="max-w-[1080px] mx-auto">
      <Navbar />
      <Header />
      <main>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
      </main>
      <Footer />
    </div>
  </div>)
}

export default App;
