import { IoMdSend } from "react-icons/io";
import "./ChatSection.css";
import Darkmode from "../Darkmode/Darkmode";
import { useContext } from "react";
import { dataContext } from "../../context/UserContext";
import user from "../../assets/user.png";
import ai from "../../assets/ai.png";

const ChatSection = () => {
  let { sent, input, setInput, showResult, resultData, recentPrompt, loading } =
    useContext(dataContext);
  return (
    <>
      <div className="chatSection">
        <div className="topsection">
          {!showResult ? (
            <div className="headings">
              <span>Hello Diksha,</span>
              <span>I'm your Own Assistant</span>
              <span>What can I help you... ?</span>
            </div>
          ) : (
            <div className="result">
              <div className="userbox">
                <img src={user} alt="" width="60px" />
                <p>{recentPrompt}</p>
              </div>

              <div className="aibox">
                <img src={ai} alt="" width="60px" />
                {loading ? (
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                ) : (
                  <p>{resultData}</p>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="bottomsection">
          <input
            onChange={(e) => {
              setInput(e.target.value);
            }}
            type="text"
            placeholder="Enter a prompt"
            value={input}
          />

          {input ? (
            <button
              className="sentbtn"
              onClick={() => {
                sent(input);
              }}
            >
              <IoMdSend />
            </button>
          ) : null}

          <Darkmode />
        </div>
      </div>
    </>
  );
};

export default ChatSection;
