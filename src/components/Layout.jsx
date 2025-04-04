import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>

      <Navbar />

      <main>
        <Outlet /> {/* This is where child pages will be rendered */}
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default Layout