import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./main.css";
import { Context } from "../../context/Context";
const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResults,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleCardClick = (promptText) => {
    setInput(promptText);
  };
  return (
    <div className="main">
      <div className="nav">
        <p style={{color : "black" ,fontFamily : "sans-serif"}}>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResults ? (
          <>
            <div className="greet">
              <p>
                <span>What’s up, Developer? </span>
              </p>
              <p>What can I help with?
			  </p>
            </div>
            <div className="cards">
			<div
                className="card"
                onClick={() => {
                  handleCardClick(
                    "Create a Script for the youtube video about coding"
                  );
                }}
              >
                <p >
                Create a Script for the youtube video about coding 
                </p>
                <img src={assets.code_icon} alt="code_icon" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleCardClick("Suggest Some Place To Visit In Punjab.")
                }
              >
                <p>Suggest Some Place To Visit In Punjab.</p>
                <img src={assets.compass_icon} alt="compass_icon" />
              </div>

              <div
                className="card"
                onClick={() =>
                  handleCardClick(
                    "Message to comfort a friend"
                  )
                }
              >
                <p>
                Message to comfort a friend
                </p>
                <img src={assets.bulb_icon} alt="bulb_icon" />
              </div>
			  <div
                className="card"
                onClick={() =>
                  handleCardClick(
                    "Quiz me on ancient civilizations"
                  )
                }
              >
                <p>Quiz me on ancient civilizations</p>
                <img src={assets.message_icon} alt="message_icon" />
              </div>

            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
              type="text"
              placeholder="Enter the Prompt Here"
            />
            <div>
              <img src={assets.gallery_icon} alt="gallery_icon" />
              <img src={assets.mic_icon} alt="mic_icon" />
              <img
                src={assets.send_icon}
                alt="send_icon"
                onClick={() => {
                  onSent();
                }}
              />
            </div> 
          </div>
          <div className="bottom-info">
            <p>
              Gemini 2.0 may display inaccurate info, including about people, so
              double-check its responses. Your privacy & Gemini Apps
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
