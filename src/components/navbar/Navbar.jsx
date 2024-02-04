import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
import logo from "../../../public/logo.png";
import github from "../../../public/github.png";
import instagram from "../../../public/instagram.png";
import linkedin from "../../../public/linkedin.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 2 }}
          transition={{ duration: 0.5 }}>
          <img src={logo} alt="logo" />
        </motion.span>
        <div className="social">
          <a href="#">
            <img src={github} alt="github" />
          </a>
          <a href="#">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="#">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
