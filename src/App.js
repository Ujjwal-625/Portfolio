import Navbar from "./components/navBar/navbar";
import Intro from "./components/intro/intro";
import About from "./components/About/about";
import Work from "./components/Works/work";
import Contact from "./components/contact/contact";
import Footer from "./components/Footer/footer.jsx"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
