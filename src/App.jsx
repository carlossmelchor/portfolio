import Navbar from "./components/NavBar/navbar.jsx"
import Header from "./components/Header/header.jsx";
import About from "./components/About/about.jsx";
import Skills from "./components/Skills/skills.jsx";
import Works from "./components/Works/works.jsx";
import Contact from "./components/Contact/contact.jsx";
import Footer from "./components/Footer/footer.jsx";

function App() {
	return(
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;