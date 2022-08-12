
import Navbar from './components/Navbar';
import Home from './components/Home';
import Featured from './components/Featured';
import Services1 from './components/Services1';
import Services2 from './components/Services2';
import Support from './components/Support';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';


function App() {
  return (<div className="bg-[#010922] text-white">
    <div className="">
      <Navbar />
      <Home />
      <main>
          <Featured />
          <Services1 />
          <Services2 />
          <Support />
          <JoinUs />
      </main>
          <Footer />
    </div>
    <div className="w-full h-4 bg-gradient-to-r from-[#565bbd] to-[#94c7d2]  mt-16"></div>
  </div>)
}

export default App;
