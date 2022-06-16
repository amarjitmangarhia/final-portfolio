import "./App.css";
import About from "./components/About/About";
// import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Projects from "./components/projects/Projects";
function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <About />
      <Projects />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
