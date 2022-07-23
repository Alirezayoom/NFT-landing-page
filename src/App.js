import Navbar from './components/Navbar'
import Body from "./components/Body";

function App() {
  return (<div className="bg-[#010922] text-white">
    <div className="max-w-[1080px] mx-auto">
      <Navbar />
      <main>
        <Body />
      </main>
    </div>
  </div>)
}

export default App;
