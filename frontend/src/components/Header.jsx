import { Link } from "react-router-dom";
import home from "../assets/home.svg";

const Header = () => {
  return <div>
     <Link to={`/`}>
      <button className="m-2 text-xl font-medium pb-1 shadow-xl duration-300 hover:bg-red-600 bg-green-500 text-white rounded-3xl w-10 h-12 p-1" >
      <img  width="30px" hieght="30px" className="p-1" src={home} alt="Pokemon Ball" />
      </button>
    </Link>
  </div>;
};

export default Header;
