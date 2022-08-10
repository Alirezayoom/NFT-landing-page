
import Navbar from './components/Navbar';
import Header from './components/Header';
import Featured from './components/Featured';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Support from './components/Support';
import Section5 from './components/Section5';
import Footer from './components/Footer';


function App() {
  return (<div className="bg-[#010922] text-white">
    <div className="max-w-[1080px] mx-auto">
      <Navbar />
      <Header />
      <main>
          <Featured />
          <Section2 />
          <Section3 />
          <Support />
          <Section5 />
      </main>
      
    </div>
  </div>)
}

export default App;
