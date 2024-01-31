import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 2 }}
          transition={{ duration: 0.5 }}>
          <img src="animated_portfolio/logo.png" alt="logo" />
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="animated_portfolio/github.png" alt="" />
          </a>
          <a href="#">
            <img src="animated_portfolio/instagram.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
