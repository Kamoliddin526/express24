import Footer from "./pages/footer/Footer";
import MenuBar from "./pages/menu/Menu";
import Navbar from "./pages/navbar/Navbar";
import Restaurants from "./pages/restaurants/Restaurants";
import ShopBar from "./pages/shop/Shop";
import Routers from "./routers/Router";
import "./styles/main.scss";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Routers />
      <ShopBar />
      <Restaurants/>
      <Footer/>
    </div>
  );
}

export default App;
