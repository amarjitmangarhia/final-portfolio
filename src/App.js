import "./App.css";
import About from "./components/About/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <About />
      <Footer />
    </div>
  );
}

export default App;
