// Sprint 2
// By:Brian Jackman
// 2024/08/12

import "./App.css";
import CarProject from "./components/CarProject.jsx";
import GaryBlueDiner from "./components/GaryBlueDiner.jsx";
import DogImageGallery from "./components/DogImageGallery.jsx";

function App() {
  return (
    <div className="App">
      <div className="box">
        <CarProject />
      </div>
      <div className="box">
        <GaryBlueDiner />
      </div>
      <div className="box">
        <DogImageGallery />
      </div>
      <div className="bottombox">
        <img
          src="/profilepic.jpeg"
          alt="Brian Jackman"
          style={{ height: "200px", width: "200px" }}
        />
        <h1>Brian Jackman</h1>
        <p>
          Aspiring software developer and designer located in St. John’s NL Here
          are some of the projects I’ve completed so far.
        </p>
      </div>
    </div>
  );
}

export default App;
