import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Home/Hero";
import Services from "./components/Home/Services";
import Pricing from "./components/Home/Pricing";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
