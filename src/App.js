import Announcement from "./Components/Announcement";
import Categories from "./Components/Categories";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Slider from "./Components/Slider";
// import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      {/* <Home /> */}
    </div>
  );
}

export default App;
