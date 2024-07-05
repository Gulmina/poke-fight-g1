import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

///Avatar Added///

import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";

/////Avatar added end////

const Playerselect = () => {
  const [player, setPlayer] = useState("");

  //Pokemon Players in Game
  const trainers = ["Dominic", "Gulmina", "Vladimir", "Ali Naeem"];

  function selectPlayer() {
    if (!trainers) {
      return alert("Please select a user.");
    } else {
      setPlayer(player);
    }
  }
  useEffect(() => {
    selectPlayer();
  }, []);

  return (
    <div className="Game">
      <div className="flex bg-blue-200 p-8 w-full">
        <div className="h-screen bg-white p-6 rounded-lg w-full">
          <div className="flex items-center space-x-4 mb-4"></div>
          <div className="flex flex-row">
            <div>
              <img
                src="../src/assets/Pokemon-Logo-PNG-Image-File-3440649988.png"
                alt="pokemon logo"
                width={100}
              />
            </div>
            <div className="text-center">
              <h1 className="text-slate-400 font-black text-5xl ml-4 ">
                Battle Game
              </h1>
            </div>
          </div>

          <div
            className="mt-5"
            style={{
              backgroundImage: "url('../src/assets/MewTwo punches Ash.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "30vh",
            }}
          >
            {/* <img src="../src/assets/ash-pokemon.png" alt="splash images " /> */}
          </div>

          {/* Player Selection code */}
          <div className="">
            <p className="text-2xl mt-10 mb-4 text-center">
              Choose your trainer:
            </p>

            {trainers?.map((trainer) => (
              <div>
                <ul className="" key={trainer}>
                  <li className="text-white bg-blue-500 hover:bg-blue-600 font-bold py-2 px-4 text-center">
                    <Link to={`/pokemon/players/${trainer}`}>
                      <button key={trainer} onClick={selectPlayer}>
                        {/*  {* Avatar added *} */}
                        <Space size={16} wrap>
                          <Avatar
                            style={{
                              backgroundColor: "#87d068",
                            }}
                            icon={<UserOutlined />}
                          />
                          {trainer}
                        </Space>

                        {/*     Avatar end */}
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playerselect;
