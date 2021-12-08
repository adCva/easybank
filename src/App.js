import "./Rest.css";
import "./Scss/style.css";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
// https://www.frontendmentor.io/solutions/easybank-landing-page-with-html-and-sass-m3pdqyTlW

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
        <Hero />
      </header>
      <main>
        <About />
        <Blog />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
