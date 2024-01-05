import "./App.css";
import Navbar from "./components/Navbar";
import Img from "./Img";
import About from "./About";
function App() {
  return (
    <div className=" w-screen md:w-full h-full overflow-x-hidden">
      <Navbar/>
      <Img/>
      <About/>
      

    </div>
  );
}

export default App;
