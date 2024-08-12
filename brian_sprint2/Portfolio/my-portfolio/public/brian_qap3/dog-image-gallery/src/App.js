// QAP 3
// By:Brian Jackman
// 2024=07-27

import "./App.css";
import BreedSelector from "./components/BreedSelector";
import ImageGallery from "./components/ImageGallery";

function App() {
  return (
    <>
      <div className="App">
        <h1>Dog Image Gallery</h1>
      </div>
      ;
      <div className="App">
        <BreedSelector />
        <ImageGallery />
      </div>
    </>
  );
}

export default App;
