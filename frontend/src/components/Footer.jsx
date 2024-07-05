import { Button } from "semantic-ui-react";
import mineball from "../assets/MineBall.png"

const Footer = () => {
  return (
    <div className="shadow-2xl flex flex-col justify-center items-center h-fit border-2 t-10 rounded-3xl">
    <div className="flex items-center sticky bottom-0 ">
              <p>Powerd by GroupOne</p>
              <img className="p-5" src={mineball} alt="Minecrft Pokemon Ball" />
            </div>
            </div>
  );
};

export default Footer;
