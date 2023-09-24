import "./App.css";
import "./custom.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>

    // <BrowserRouter>
    //   <Router>
    //       <Route path="/" component={Layout} />
    //       <Route index path="/home" component={Home} />
    //       <Route path="/skills" component={Skills} />
    //       <Route path="/experience" component={Experience} />
    //       <Route path="/portfolio" component={Portfolio} />
    //       <Route path="/contact" component={Contact} />
    //     </Router>
    // </BrowserRouter>
  );
}
