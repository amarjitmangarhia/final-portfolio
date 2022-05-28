import "./App.css";
import myImg from "./img/finallll.png";
function App() {
  return (
    <div>
      <div className="container">
        <header id="header">
          <div className="hello-text">Hello I Am</div>
          <div className="navbar">
            <div className="nav-items">Home</div>
            <div className="nav-items">About</div>
            <div className="nav-items">Project</div>
            <div className="nav-items ">Contact</div>
          </div>
        </header>
        <main id="main">
          <div className="left">
            <div className="wrapper">
              <img className="img" src={myImg} alt="" />
            </div>
          </div>
          <div className="right">
            <div className="first-name">amar</div>
            <div className="last-name">mangarhia</div>
          </div>
        </main>
        <footer id="footer">
          <div className="mern">MERN STACK DEV</div>
          <div className="skills">MONGO DB | EXPRESS | REACT | NODE JS</div>
        </footer>
      </div>
    </div>
  );
}

export default App;
