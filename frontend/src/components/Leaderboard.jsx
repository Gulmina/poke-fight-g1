import React, { useState, useEffect, baseurl } from "react";
import axios from "axios";
import "@blueprintjs/table/lib/css/table.css";
import { Cell, Column, Table } from "@blueprintjs/table";

import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";

import Head from "./Header";
const Leaderboard = () => {
  const [games, setGames] = useState([]);

  const handleClick2 = (item) => {
    const response = fetch(`${baseurl}/game/delete` + "/" + item, {
      method: "delete",
    });
    return response.json();
  };
  /*  const newdata = {
    name: "Ali",
    winner: 1,
    loser: 0,
    games: 1,
  };
  const handleClick = (message) => {
    const response = fetch("http://localhost:8000/game/savegame", {
      method: "POST",
      body: JSON.stringify(message),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    if (response.status !== 201) {
      throw new Error("Faield to post");
    }
    const post = response.json();
    console.log(post);
    return post;
  };
 */
  /*   async function totalwins(item) {
    const response = await fetch(
      "http://localhost:8000/game/totalwinner" + "/" + item,
      {
        method: "get",
      }
    );
    return await response.json();
  }
  console.log(); */

  useEffect(() => {
    const fetchGames = async () => {
      const res = await axios.get(`${baseurl}/game/gameinfo/`);
      setGames(res.data);
    };
    fetchGames();
  }, []);

  return (
    <>
      <Head player={null} />
      <div className="border-solid border-2 border-indigo-600 p-8">
        <h1 className="text-center text-4xl p-6">Scores Borad</h1>

        <ul className="bg-slate-50 grid grid-cols-4">
          {games.map((game) => (
            <li
              key={game._id}
              className="border-solid border-2 border-indigo-200 rounded-md p-2 text-lg "
            >
              <strong>
                <Space size={16} wrap>
                  <Avatar
                    style={{
                      backgroundColor: "#87d068",
                    }}
                    icon={<UserOutlined />}
                  />
                  {game.name}
                </Space>
              </strong>

              <li>
                <Space>
                  <CheckCircleTwoTone twoToneColor="#52c41a" />
                  {game.winner}
                </Space>
              </li>
              <li>Defeated : {game.loser}</li>
              {/* <li>{game.date}</li> */}
              {/*  <li>Date : {game.data}</li> */}
              {/*   {game.games} */}
              <button
                className="border-solid border-2 border-indigo-200 rounded-md p-2 text-lg "
                onClick={() => handleClick2(game._id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Leaderboard;
