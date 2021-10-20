import "./App.css";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import Sidebar from "./components/Sidbar";
import Stories from "./components/Stories";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Stories />
      <div className="home__container">
        <Posts />
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
