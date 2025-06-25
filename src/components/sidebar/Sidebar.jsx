import "./Sidebar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import { useContext, useState } from "react";
import { dataContext } from "../../context/UserContext";
import { TbReceiptYuan } from "react-icons/tb";

const Sidebar = () => {
  const [extend, setExtend] = useState(false);
  const { sent, prevPrompt, newChat } = useContext(dataContext);

  async function loadPrevPromt(prompt) {
    sent(prompt);
  }

  return (
    <>
      <div className="sidebar">
        <GiHamburgerMenu
          id="hamburger"
          onClick={() => {
            setExtend((prev) => !prev);
          }}
        />

        <div
          className="newChat"
          onClick={() => {
            newChat();
          }}
        >
          <FaPlus />
          {extend ? <p>New Chat</p> : null}
        </div>

        {prevPrompt.map((item, index) => {
          return (
            <div
            key={index}
              className="recent"
              onClick={() => {
                loadPrevPromt(item);
              }}
            >
              <FaRegMessage />
              {extend ? <p>{item.slice(0, 10) + "..."}</p> : null}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;
