import { Link } from "react-router-dom";
import home from "../assets/home.svg";
/* import { Flex, Layout } from "antd";
const { Head } = Layout; */
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";

const Header = ({ player }) => {
  const headerStyle = {
    textAlign: "left",
    color: "#fff",
    height: 64,
    paddingInline: 48,
    lineHeight: "64px",
    backgroundColor: "#4096ff",
  };
  const layoutStyle = {
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#4Dffff",
  };
  return (
    <>
      {/* <Flex gap="middle" wrap>
        <Layout style={layoutStyle}> */}
      <div
        style={headerStyle}
        className="grid grid-cols-2 justify-items-stretch gap-4"
      >
        <div className="justify-self-start">
          <Link to={`/`}>
            <button className=" m-2 text-xl font-medium pb-1 shadow-xl duration-300 hover:bg-red-600 bg-green-500 text-white rounded-3xl w-15 h-12 p-1">
              <img
                width="40px"
                hieght="30px"
                className="p-1"
                src={home}
                alt="Pokemon Ball"
              />
            </button>
          </Link>
        </div>
        <div className="justify-self-end ">
          {player === null ? (
            <h1>{player}</h1>
          ) : (
            <Space size={16} wrap>
              <Avatar
                style={{
                  backgroundColor: "#87d068",
                }}
                icon={<UserOutlined />}
              />
              {player}
            </Space>
          )}
        </div>
      </div>
      {/* </Layout>
      </Flex> */}
    </>
  );
};

{
  /*  */
}
export default Header;
