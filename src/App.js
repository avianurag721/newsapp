// import { Route, Routes } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import News from "./components/News";
// import Hamburger from "./components/Hamburger";


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Hamburger/>} /> */}
        <Route path="/" element={<News category='general'/>} />
        <Route path="/sports" element={<News category='sports' />} />
        <Route path="/health" element={<News category='health'/>} />
        <Route path="/business" element={<News category='business'/>} />
        <Route path="/entertainment" element={<News category='entertainment'/>} />
        <Route path="/science" element={<News category='science'/>} />
        <Route path="/technology" element={<News category='technology'/>} />
      </Routes>
      

      

    </div>
    )
}

export default App;
